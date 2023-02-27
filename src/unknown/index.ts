export default function unknownSample() {
  // unknown型は, ほかの具体的な型に代入することができない
  // const u: unknown = 1

  // const value1: number = u
  // const value2: string = u
  // const value3: object = u

  // any型 または unkown型 には代入できる
  // const a: any = u
  // const u2: unknown = u

  // unknown型は、プロパティへのアクセスや、メソッドの呼び出しもできない
  // const un: unknown = 10
  // un.toFixed()
  // const un: unknown = {
  //   name: "オブジェクト",
  //   doSomething: () => console.log("nothing I can do")
  // }
  // console.log(un.name)
  // un.doSomething()

  // unknown型を実用するには、型ガードで型の絞り込みをしてあげる
  // 具体的には、typeof や instanceof を使う
  // const value: unknown = ""
  // if (typeof value === "string") {
  //   console.log(value.toUpperCase()) // エラーにならない🙌
  // }

  // いろいろな型ガード関数の例

  // typeof 演算子
  // function showMonth(month: string | number) {
  //   if (typeof month !== "string") {
  //     // Do Something
  //   }
  // }
  // TSの仕様により、typeof null === "object" となる
  // function getMonth(date: string | Date | null) {
  // if (typeof date === "object") {
  // オブジェクトは null である可能性がまだ残っている.
  // console.log(date.doSomething() + 1)
  // }

  // not null チェックすればOK
  // if (typeof date === "object" && date !== null) {
  //   console.log(date.doSomething())
  // }
  // }

  // instanceof 演算子
  // function getDate(date: string | Date) {
  //   // typeof ではオブジェクトということまでしかわからない
  //   // instanceof なら特定のクラスのインスタンスであることまで判別できる
  //   if (date instanceof Date) {
  //     console.log(date.doSomething())
  //   }
  // }

  // in 演算子
  type Wizard = {
    callMagic(): void
  }
  type Knight = {
    Slash(): void
  }
  type Player = Wizard | Knight
  // in を使うとオブジェクトが特定のプロパティを持ってるかわかる
  function attack(player: Wizard | Knight) {
    if ('Slash' in player) {
      console.log('めっちゃ斬る')
      player.Slash()
    } else {
      player.callMagic()
      console.log('めっちゃ魔法かける')
    }
  }
  const wicher: Wizard = {
    callMagic: () => alert('Yeah'),
  }
  attack(wicher)

  // ユーザー定義による型ガード関数
  // 関数として使うパターン
  function isWizard(player: Player): player is Wizard {
    return 'callMagic' in player
  }
  function attackMore(player: Player) {
    if (!isWizard(player)) {
      console.log('めっちゃ斬る')
      player.Slash()
    } else {
      player.callMagic()
      console.log('めっちゃ魔法かける')
    }
  }
  attackMore(wicher)

  // 型ガード関数を用いた unknown型の絞り込み例
  function isObject(value: unknown): value is object {
    return typeof value === 'object' && value !== null
  }
  const value: unknown = {
    a: 1,
    b: 2,
  }
  if (isObject(value)) {
    console.log(Object.keys(value))
  }

  // unknown型を配列型に絞り込む
  function isArraySample(value: unknown): value is number {
    // Array.isArray() メソッドで配列型かどうかをチェックできる
    if (!Array.isArray(value)) {
      return false
    }
    // 配列の個別要素が、特定の型であるかどうかもダブルチェックするとGood
    return value.every((e) => typeof e === 'number')
  }

  // unknown型をオブジェクト型に絞り込む
  type Email = {
    from: string
    to: string
    title: string
    subject: string
  }

  // これだとまだ Email 型を満たしているのかわからない
  function isEmail(value: unknown): value is Email {
    if (typeof value !== 'object' || value === null) {
      return false
    }

    // ここで各プロパティの型をチェックしても
    // プロパティ 'from' は型 'object' に存在しません。
    // というエラーが出る🙅‍♂️
    // if (typeof value.from !== "string") {
    //   return false
    // }

    // そのため、型アサーションを使って
    // Email型 へと近づけてあげてから、プロパティチェック
    // この時、as を使うよりも unknown型の Record を用いる方がより強力
    // const email = value as Email
    const email = value as Record<keyof Email, unknown>
    if (typeof email.from !== 'string') {
      return false
    }
    return true
  }

  // Record を用いた型アサーションだと、下記のように同義になる
  // type MayBeEmail = Record<keyof Email, unknown>
  // type MayBeEmail = {
  //   from: unknown;
  //   to: unknown;
  //   title: unknown;
  //   subject: unknown;
  // }

  // unknown型は、any型をより安全に使うための型。
  // anyに逃げずに、unknownにしといて絞り込みを効かせるゲーム。
}
