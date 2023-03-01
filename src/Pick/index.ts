export default function pickSample() {
  // 型<T>から任意のキーを含むオブジェクト型を返す
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
  // Keysは、 変数だと認識されないので型エイリアスで。
  type Optional = 'surname' | 'middleName' | 'givenName'
  type Person = Pick<User, Optional>
  // これと同義となる
  // type Person = {
  //   surname: string;
  //   middleName?: string;
  //   givenName: string;
  // };

  // 型の変更に柔軟に追従する例
  // 書籍の検索サービスなどで、こんなBook型があるとして
  type Book = {
    id: number
    title: string
    author: string
    createdAt: Date
    updatedAt: Date
  }

  // Book 自体を作成する際に求められるのは、
  // title と author のみという状況（他の情報は後付け）だとこうなる
  type BookInputData = {
    title: string
    author: string
  }

  // しかし、プロジェクトの方針で author に対して、
  // Person型 を割り当てることになったら、修正が面倒

  // これを回避するために BookInputType 型は、
  // Pick<T, K> を使って型を引用
  type IBookInputData = Pick<Book, 'title' | 'author'>
}
