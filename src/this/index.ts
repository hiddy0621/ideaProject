export default function thisSample() {
  class Male {
    public readonly name: string

    constructor(name: string) {
      this.name = name
    }

    public toString(): string {
      return `osu: ${this.name}`
    }
  }

  class Female {
    private name: string

    public constructor(name: string) {
      this.name = name
    }

    public toString(this: Female): string {
      return `mesu ${this.name}`
    }
  }

  const male = new Male('HIDDY')
  const female = new Female('KANA')
  console.log(male.toString())
  console.log(female.toString())
  // MaleクラスとFemaleクラスは、構造は似ているが、toStringメソッドにおける引数が異なる
  // 関数式にしてチェック
  const maleString: () => string = male.toString
  const femaleString: (this: Female) => string = female.toString
  // maleString()
  // femaleString()
}
