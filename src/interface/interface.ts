// interface は宣言した順に自動でマージが行われる
interface Bread {
  calories: number
}

interface Bread {
  type: string
}

const francePan: Bread = {
  calories: 400,
  type: 'corone',
}

// 型エイリアスだと intersection で結合してあげる
type MabouDofu = {
  calories: number
  spicyLevel: number
}

type Rice = {
  calories: number
  gram: number
}

type MabouDon = MabouDofu & Rice // intersection

const maboudon: MabouDon = {
  calories: 400,
  spicyLevel: 3,
  gram: 500,
}

interface Book {
  page: number
  title: string
}

interface Magazine extends Book {
  cycle: 'daily' | 'weekly' | 'monthly' | 'yearly'
}

const jump: Magazine = {
  page: 300,
  title: '週刊少年ジャンプ',
  cycle: 'weekly',
}

// 型エイリアスを拡張することもできる
type BookType = {
  page: number
  title: string
}

interface Handbook extends BookType {
  theme: string
}

const cotrip: Handbook = {
  page: 400,
  title: 'ことりっぷ',
  theme: '旅行',
}

// implements を使って class に型を定義する
class Comic implements Book {
  page: number
  title: string

  constructor(page: number, title: string, private publishedYear: number) {
    this.page = page
    this.title = title
  }

  getPublishYear() {
    return this.title + 'は' + this.publishedYear + '年に発売されました'
  }
}

export default function interfaceSample() {
  const popularComic = new Comic(200, 'ジョジョ', 1984)

  console.log(popularComic.getPublishYear())
}
