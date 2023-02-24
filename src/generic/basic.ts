export default function genericSample() {
  // ジェネリク型を使わないパターン
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  const strings = ['be', 'the', 'force', 'with', 'you']
  const numbers = [1, 2, 33, 4, 56]
  console.log(stringReduce(strings, 'Yap'))
  console.log(numberReduce(numbers, 0))

  // ジェネリクス型を使って抽象化をする
  // 型エイリアスを用意
  type GenericReduce<T> = {
    (array: T[], initialValue: T): T
  }

  const genericStringReduceSample: GenericReduce<string> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  const genericStrings = ['This ', 'is ', 'worth ', 'of ', 'generics ']
  console.log(genericStringReduceSample(genericStrings, ''))

  const genericNumberReduceSample: GenericReduce<number> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  const genericNumbers = [10000, 202000, 300000, 40410404]
  console.log(genericNumberReduceSample(genericNumbers, 500000))

  // 色々なジェネリク型の記法
  // 完全な呼び出しシグネチャ
  type GenericType2 = {
    <T>(array: T[], initialValue: T): T
    <U>(array: U[], initialValue: U): U
  }

  // 呼び出しを省略した記法
  type GenericType3<T> = (array: T[], initialValue: T) => T

  // 個別で割り当てる
  type GenericType4 = <T>(array: T[], initialValue: T) => T
}
