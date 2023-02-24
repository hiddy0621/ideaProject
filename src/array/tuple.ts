export default function tupleSample() {
  // 一般的なタプル型
  let res: [string, number] | boolean = ['タプル', 21]
  // res = [59, "ded"]
  // res = ["ded", "59"]
  res.push('params')
  res.push(22)
  res.push(59)
  res = false
  console.log(res)

  // 可長変引数を使ったタプル
  const girlFriends: [string, ...string[]] = ['kana', 'misa', 'kaoru', 'kyoko']
  girlFriends.push('Rio')

  console.log(girlFriends)
}
