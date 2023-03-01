export default function neverSample() {
  // never 型には何も代入できない, any型でさえも。。。
  // const a: any = "yeah"
  // const i: never = a // not assignable

  // 逆に、never型は どんな型にも代入可能
  // const n1: never = 1
  // const n2: never = n1
  // const f: string = n1
  // function neverLoop(): never {
  //   while (true) {} //無限ループ
  // }

  // never には何も代入できないので、網羅性チェックで利用できる
  // ここでは例外処理を例にする
  class ExhaustiveError extends Error {
    constructor(value: never, message = `no-supported type ${value}`) {
      super(message)
    }
  }
  function errorCheck(value: 'yes' | 'no'): void {
    switch (value) {
      case 'yes':
        console.log('yes')
        break
      case 'no':
        console.log('no')
        break
      default:
        throw new ExhaustiveError(value)
    }
  }

  errorCheck('yes')
}
