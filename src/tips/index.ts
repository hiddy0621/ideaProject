export default function tips() {
  // shallow copy
  // const map1 = new Map([
  //   [".js", "JS"],
  //   [".ts", "TS"]
  // ])
  // const map2 = new Map(map1)
  // console.log(map1.get(".js"))
  // console.log(map2)
  // console.log(map1 === map2)
  // const map = new Map<number, string>()
  // map.set(NaN, "JS")
  // map.set(NaN, "TS")
  // console.log(map)
  // const map = new Map([
  //   ["a", 1],
  //   ["b", 2],
  //   ["cccc", 42342],
  // ])
  // console.log(Object.fromEntries(map))
  // type Person = {
  //   name: string
  //   age: number
  // }
  // const set = new Set<string>()
  // console.log(set)
  // // セットに渡した配列は重複する値を取り除いてくれる
  // const ary1 = [1,1,2,2,2,2,3,3,3,3,3,3,3]
  // const ary2 = [...new Set(ary1)]
  // console.log(ary2)
  // type User = {
  //   name: string
  //   age: number
  //   country: string
  //   // 後からプロパティを追加しても大丈夫
  //   nationality: string
  //   isVip: boolean
  // }
  // type UserInfo = Omit<User, 'isVip'>
  // type PartialUserInfo = Partial<UserInfo>
  // 分割代入引数を使うことで、変更に強い関数にできる
  // function findUser({ name, nationality }: UserInfo): PartialUserInfo {
  //   return {
  //     name: name,
  //     age: 22,
  //     country: 'where',
  //     nationality: nationality,
  //   }
  // }
}
