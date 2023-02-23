export default function typeAliasSample() {
  // 型エイリアス
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  }

  console.log(japan)

  const america: Country = {
    capital: 'Washington.D.C',
    language: 'English',
    name: 'United States of America',
  }

  console.log('This is america', america)

  // 合併型と交差型, Union and Intersection
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    margicSkill: string
  }

  // Union 。。。Knight または Wizard の型を持つ
  type Adventurer = Knight | Wizard

  // Intersection。。。Knight と Wizard のどちらの型も持つ
  type Paradin = Knight & Wizard

  const adventurer1: Adventurer = {
    hp: 100,
    sp: 50,
    weapon: '木の剣',
    swordSkill: '三連切り',
  }
  const adventurer2: Adventurer = {
    hp: 50,
    mp: 100,
    weapon: '木の杖',
    margicSkill: 'ファイヤーボール',
  }

  console.log('剣士見習い', adventurer1)
  console.log('ひよっっこ魔導士', adventurer2)

  const paradin: Paradin = {
    hp: 120,
    mp: 50,
    sp: 40,
    weapon: '魔法の剣',
    swordSkill: '魔法切り',
    margicSkill: 'ウィザードパワー',
  }

  console.log('パラディン最強', paradin)
}
