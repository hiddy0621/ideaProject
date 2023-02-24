export default function immutableSample() {
  // ミュータブルなやつ
  const mutableNums: number[] = [123, 333, 5013501, 59913295]
  mutableNums[2] = 9292929

  // イミュータブル
  // const immutableNum: readonly number[] = [111, 222, 3333, 444444, 5555555]
  const immutableNum: Readonly<number[]> = [111, 222, 3333, 444444, 5555555]
  const immutableStrings: ReadonlyArray<string> = ['読み取り', 'しか出来ない', 'イミュータブルな', '存在']

  // immutableNum[3] = 666666 // 書き換え不可
  // immutableNum.push(666666) // 追加不可

  // immutableStrings[0] = "書き換えられんのか" // 書き換え不可
  // immutableStrings.push("追加できませんでした") // 追加不可

  console.log(immutableNum)
  console.log(...immutableStrings)
}
