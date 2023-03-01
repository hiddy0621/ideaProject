export default function recordSample() {
  // Record<Keys, Type>はプロパティのキーがKeysであり、プロパティの値がTypeであるオブジェクト型を作るユーティリティ型です。

  // Keys
  // オブジェクトのプロパティーキーを指定します。Keysに代入できる型は、string、number、symbolとそれぞれのリテラル型です。

  // Type
  // オブジェクトのプロパティの値の型を指定します。任意の型が代入できます。

  // 簡単な例
  type StringNumber = Record<string, number>
  const mock: StringNumber[] = [
    {
      a: 2,
      b: 829,
    },
    {
      body: 19,
      res: 20002020,
    },
  ]

  type Parson = Record<'firstName' | 'middleName' | 'lastName', string>
  const p1: Parson = {
    firstName: 'Take',
    middleName: 'hiddy',
    lastName: 'hidenao',
  }

  // Keys には 特定の型エイリアスから引用して渡すこともできる
  type Worker = {
    company: string
    occupation: string
    fee: number
  }
  type Freelance = Record<keyof Worker, unknown>
  const p2: Freelance = {
    company: 'ddd',
    occupation: 'ddd',
    fee: 'deeeeee',
  }
  console.log(p2)
}
