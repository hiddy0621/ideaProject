export default function promiseSample() {
  const url = 'https://api.github.com/users/deatiger'

  type Profile = {
    login: string
    id: string
  }

  type FetchProfile = () => Promise<Profile | null>

  const fetchProfile: FetchProfile = () => {
    return new Promise((resolve, reject) => {
      return fetch(url)
        .then((res) => {
          res
            .json()
            .then((json) => {
              resolve(json)
              return json
            })
            .catch((error) => {
              console.log(error)
              reject(null)
            })
        })
        .catch((error) => {
          console.log(error)
          reject(null)
        })
    })
  }

  fetchProfile().then((profile: Profile | null) => {
    if (profile) {
      console.log(profile)
    }
  })
  // .catch(() => {

  // })
}
