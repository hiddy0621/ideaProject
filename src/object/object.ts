export function objectSample() {
  // const a: object = {
  //   name: "Tora-Hack",
  //   age: 28
  // }

  let country: {
    language: string
    name: string
  } = {
    language: 'japanese',
    name: 'japan',
  }

  country = {
    language: 'English',
    name: 'USA',
  }

  console.log('Object obj Sample❶', country)

  // Optional and ReadOnly
  const takehack: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 29,
    lastName: 'Otake',
    firstName: 'Hidenao',
  }

  takehack.gender = 'male'
  ;(takehack.lastName = 'kawabata'),
    // takehack.firstName = "deawdawe"

    console.log(takehack)

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Japan',
    Korea: 'Korea',
  }

  capitals.China = 'Beijiang'
  capitals.America = 'Hawaii'

  console.log(capitals)
}
