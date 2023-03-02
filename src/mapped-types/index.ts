export default function mappedTypes() {
  // インデックス型の入力パターンが決まっているなら
  // Mapped Types と ユニオン型の併用で楽できる
  type SystemSupportedTypes = 'en' | 'fr' | 'it' | 'es'
  // これをインデックス型と同様にキーの制約にする
  type Butterfly = {
    [key in SystemSupportedTypes]: string
  }

  // ReadOnlyにもできる
  type ReadOnly<T> = {
    // keyof 演算子で オブジェクトキーのユニオン型を返す
    // keyofのメリット
    // keyofのメリットは、保守性が上がる点です。オブジェクト型とは別にプロパティ名のユニオン型を定義していると、オブジェクト型のプロパティを変更したときに、そのユニオン型のほうも修正が必要になります。keyofを使って、オブジェクト型からキーを導出するようにしておけば、変更箇所はオブジェクト型のところだけになります。

    // 加えて、プロパティが何十個もあるようなオブジェクトを想像してみてください。そのプロパティ名のユニオン型を定義する必要が出てきたとします。その際に、プロパティ名をすべて転記するとなると、転記漏れや書き間違いもあるでしょう。そういう場合はkeyofを使うとそもそも書き写す必要がないため、便利な上に安全なコーディングができます。
    readonly [P in keyof T]: T[P]
    // readonly [P in "T1" | "T2" | "T3" | "T4"]: T[P]
  }
  type ReadOnlyButterfly = ReadOnly<Butterfly>
  // type ReadOnlyButterFly = {
  //   readonly en: string;
  //   readonly fr: string;
  //   readonly it: string;
  //   readonly es: string;
  // }

  const butteflies: ReadOnlyButterfly = {
    en: 'Butterfly',
    fr: 'Papillon',
    it: 'Farfalla',
    es: 'Mariposa',
    //  オブジェクト リテラルは既知のプロパティのみ指定できます。というエラーが出る
    // de: "Schmetterling",
  }

  // Mapped-Types へのプロパティの追加ができない
  type KeyValuesAndName = {
    [K in string]: string
    // A mapped type may not declare properties or methods.
    // name: string; // 追加のプロパティ
  }
  type AddName = {
    name: string
  }
  // どうしても追加したい場合は、インターセクションにするしかない
  type AddedKeyValueAndName = KeyValuesAndName & AddName
}
