export default function nonExist() {
  let name: any = undefined

  name = 'りょう'
  name = 28

  console.log(typeof name)

  if (!name) {
    console.log(`吾輩は猫である。名前はまだない`)
  } else {
    console.log(`今日は猫の日。美味しいエサが欲しい。名前は` + name)
  }
}
