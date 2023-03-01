export default function utilitySample() {
  // Patial 型のメモ
  // 全てのプロパティをオプショナルにしてしまう
  type Person = {
    id: string
    name?: string
    birthday?: string
  }
  // type PartialPerson = {
  //     surname?: string | undefined;
  //     middleName?: string | undefined;
  //     givenName?: string | undefined;
  // } と同義になる。
  type PartialPerson = Partial<Person>

  // Object options における Patial型の活用
  type ObjectOptions = {
    x: string
    y: string
    z: string
  }
  type PartialObjectOptions = Partial<ObjectOptions>

  // パーシャル型にした上で、デフォルト引数を空のオブジェクトにしておけば、とりあえず関数を実行できる
  function optionsObject({ x, y, z }: PartialObjectOptions = {}) {
    console.log(x)
    console.log(y)
    console.log(z)
  }
  optionsObject()

  // これを応用した例として、ユーザー検索の関数をあげる
  type User = {
    id: string
    middleName?: string
    givenName: string
    age: number
    address?: string
    nationality: string
    createdAt: string
    updatedAt: string
  }

  // よくない例
  // function findUsers(
  //   surname?: string,
  //   middleName?: string,
  //   givenName?: string,
  //   age?: number,
  //   address?: string,
  //   nationality?: string
  // ) {
  //   // ...
  // }
  // これだと任意のプロパティに対する絞り込み検索の時、
  // 不都合が生じる
  // 例えば、XX才のユーザーだけを検索したい時に、引数の順番をそのまま維持しないといけないので、undefined を引数として渡すことになってしまう。etc
  // findUsers(undefined, undefined, undefined, 22);

  // これを回避するために User型をパーシャル型にして、
  type OptionUser = Partial<User>
  // Optional Object として引数を設定
  // デフォルト値は空のオブジェクト
  function findUsers({ id, middleName, givenName, age, address, nationality }: OptionUser = {}) {
    // Do Something
    if (typeof age === 'number') {
      console.log(age)
    }
  }
  // スッキリと呼び出せるし、
  findUsers()
  // 任意のプロパティに対して引数を与えられる
  findUsers({ age: 22 })
}
