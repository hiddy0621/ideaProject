export default function typeGeneration() {
  // すでに存在するオブジェクトから型を生成する
  type Plan = 'Free' | 'Standard' | 'Premium'
  const user = {
    name: 'yyts',
    age: 29,
    from: 'japan',
    plan: 'Free' as Plan,
  }
  type User = typeof user

  const constUser = {
    name: 'yyts',
    age: 29,
    from: 'japan',
    plan: 'standard',
  } as const
  // as const を付与すると プロパティを定数値で取得できる
  type ConstUser = typeof constUser
  // type ConstUser = {
  //   readonly name: "yyts";
  //   readonly age: 29;
  //   readonly from: "japan";
  //   readonly plan: "standard";
  // }

  // オブジェクトからキーだけ欲しい時
  const conf = {
    en: 'Are you sure?',
    fr: 'Êtes-vous sûr?',
    es: 'Está seguro?',
    ja: 'よろしいですか？',
    zh: '您确定吗？',
  } as const
  type Language = keyof typeof conf
  // type TypeOfLang = typeof conf
  // type Lang = keyof TypeOfLang
  // type Language = Omit<TypeOfLang, "zh">

  // オブジェクトからプロパティの型を生成する
  // 最終目標👇👇
  // type ConfirmationMessage =
  // | "Are you sure?"
  // | "Êtes-vous sûr?"
  // | "Está seguro?"
  // | "よろしいですか？"
  // | "您确定吗？";

  // ・まず、オブジェクトから型を生成して、
  // ・Mapped-typesを使うとできる
  type ConfirmationMessage = (typeof conf)[Language]

  // 通貨の配列から、通貨の型を作ってみる
  const currencies = ['CNY', 'EUR', 'GBP', 'JPY', 'KRW', 'USD'] as const
  // このようなとき、このJavaScriptの資産をできるだけ変更せずに貨幣の型 (ユニオン型) を作ることができれば今後便利そうです。つまり次のようなユニオン型です。
  // type Currency = "CNY" | "EUR" | "GBP" | "JPY" | "KRW" | "USD";

  type CurrencyAsConst = (typeof currencies)[number]
}
