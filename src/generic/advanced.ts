export default function advancedGenericSample() {
  // map関数のシグネチャ
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]

  const mapStringsToNums: Map<string, number> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }

  const mapNumsToStrings: Map<number, string> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }

  function convertStringToNum(item: string): number {
    // Number(array[i])
    if (!isNaN(Number(item))) {
      return Number(item)
    } else {
      return 0
    }
  }

  function convertNumToString(item: number): string {
    return item.toString()
  }

  console.log(mapStringsToNums(['32', 'やば', '2'], convertStringToNum))
  console.log(mapNumsToStrings([40, 1000000, 2392302492424], convertNumToString))
}
