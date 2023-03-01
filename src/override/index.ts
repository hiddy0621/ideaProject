export default function overrideSample() {
  // ひとつの関数に異なる関数シグネチャを複数持つ関数のことをオーバーライド関数という
  // オーバーライド関数は、「関数シグネチャ」と「実装」の２つに分けて書くのが一般的

  // また、シグネチャと関数の関数名は、統一する。

  // 関数シグネチャ（ここでは２つ設定）
  function hello(person: string): void
  function hello(person: string[]): void

  // 関数の実装
  function hello(person: string | string[]): void {
    if (typeof person === 'string') {
      console.log(`This is ${person}`)
    } else {
      console.log(`We are ${person.join(',')}`)
    }
  }
  hello(['hiddy'])
  // hello(["hiddy", "kana", "leandro", "prisc"])

  // アロー関数にはオーバーライドの構文がない
  // そのため、関数シグネチャで、アノテーション（型注釈)するしかない
  type Hello = {
    (person: string): void
    (persons: string[]): void
  }
  // インターセクション型でもOK
  // type sayHello = ((person: string) => void) & ((persons: string[]) => void)

  const sayHello: Hello = (person: string | string[]): void => {
    if (typeof person !== 'string') {
      console.log('Single')
      return
    } else {
      console.log('multiple')
      return
    }
  }

  // オーバーロード関数よりも、ジェネリクスやユニオン型を使うのが有効な時もあるよ
}
