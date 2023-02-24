export default function arraySample() {
  // シンプルな配列の型定義
  const colors: string[] = ['red', 'blue']
  // colors.push()
  colors.push('yellow')

  console.log(colors)

  const even: Array<number> = [1, 44, 256, 33]
  console.log(even)

  const intersection: (number | string)[] = [12, 'deawdeawe', 777]

  intersection.push(139482513513)
  intersection.push('何でもあり')

  console.log(intersection)

  // 配列の型推論
  const generateSomeArray = () => {
    const _someArray = [] // any[]
    _someArray.push(123) // number[]
    _someArray.push('型推論') // (number | string)[]
    return _someArray
  }

  const someArray = generateSomeArray()
  someArray.push(599595)
  // someArray.push(false)
  console.log(someArray)
}
