export default function omitSample() {
  // 型<T>から任意の keys を取り除いた オブジェクト型を返す
  type User = {
    surname: string
    middleName?: string
    givenName: string
    age: number
    address?: string
    nationality: string
    createdAt: string
    updatedAt: string
  }
  // ここは変数ではなく、型エイリアスとしてセット
  type Optional = 'age' | 'address' | 'nationality' | 'createdAt' | 'updatedAt'
  type Person = Omit<User, Optional>
  // こうなるよ
  // type Person = {
  //   surname: string;
  //   middleName?: string;
  //   givenName: string;
  // };

  // Omit<T, Keys>のKeysにTには無いプロパティキーを指定しても、TypeScriptコンパイラーは指摘しない。たとえば、Keysにタイポがあっても検出できないので注意が必要。
}
