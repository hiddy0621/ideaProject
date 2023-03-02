export default function indexAccess() {
  // ブラケット表記で、プロパティの型を参照できる
  type A = {
    foo: string
  }
  type Foo = A['foo'] // string

  // ユニオン型との組み合わせ
  type Person = {
    name: string
    age: number
  }
  // ぜんぶ、string | number
  type Index1 = Person['name' | 'age']
  type Index2 = Person[keyof Person]
  // その型に存在しないプロパティにはエラー出してくれる
  // type IndexError = Person["birth"]

  // 配列型から参照する時には [number] をつける
  // type StringAry = string[]
  // type T = StringAry[number] // string

  type MixedArray = (string | undefined)[]
  // type T = MixedArray[number] // string | undefined
}
