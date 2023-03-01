// アロー関数の復習
export default function practiceSample() {
  // Interface を追加
  interface Person {
    firstName: string
    lastName: string
    getFullName(): string
  }

  class User implements Person {
    public readonly firstName: string
    public readonly lastName: string

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName
      this.lastName = lastName
    }

    getFullName(): string {
      return `My Name is ${this.firstName} ${this.lastName}`
    }
  }

  function sendGreeting(this: Person) {
    console.log(this.getFullName())
  }
  const user1 = new User('otake', 'hidnao')
  const userGreeting = sendGreeting.bind(user1)

  userGreeting()
  // console.log(user)

  // function showThis() {
  //   this.name = "FOOOOO"
  //   console.log(this)
  // }

  // const foo: { name?: string, showThis?(): void } = {}
  // foo.showThis = showThis
  // foo.showThis()

  const user2 = {
    firstName: 'Taro',
    lastName: 'Tanaka',

    // 従来の関数
    fn1: function () {
      console.log(user2.firstName)
    },
    // アロー関数
    fn2: () => {
      console.log(user2.lastName)
    },
  }
  user2.fn1()
  user2.fn2()

  // アロー関数での巻き上げ
  const mainly = () => {
    step1()
    step2()
  }

  const step1 = () => {
    console.log('Hey')
    return
  }
  const step2 = () => {
    console.log('巻き上げろ')
    return
  }
  mainly()

  //
}
