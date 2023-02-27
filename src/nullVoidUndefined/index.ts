export default function nullVoidSample() {
  // 戻り値のない関数は undefined になる
  // 戻り値のない関数には void で型注釈するのが一般的
  // function fn(message: string): void {
  //   console.log(message)
  //   return
  // }
  // const result = fn("yeah")
  // console.log(result)
  // 戻り値に undefined を型注釈する場合は、return が必須になる
  // 戻り値を返さないという意図があるのであれば、void にした方がいいよね
  // function fn(message: string): undefined {
  //   console.log(message)
  // }
  // const result  = fn()
  // console.log(result)
  // void は undefined の supertype (上位型)なので
  // void を undefined に代入できない
  // undefined を void に代入することはできる
  // let myNumber: number | undefined
  // function f1(): void {}
  // function f2(): undefined {
  //   return
  // }
  // myNumber = f1()
  // myNumber = f2()
}
