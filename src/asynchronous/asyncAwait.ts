export default async function asyncAwaitSample() {
  const url = 'https://api.github.com/users/deatiger'

  type Profile = {
    login: string
    id: string
  }

  type FetchProfile = () => Promise<Profile | null>

  const fetchProfile: FetchProfile = async () => {
    const response = await fetch(url)
      .then((res) => res)
      .catch((error) => {
        console.log(error)
        return null
      })
    if (!response) {
      return null
    }

    const json = await response
      .json()
      .then((json: Profile) => {
        console.log(json)
        return json
      })
      .catch((error) => {
        console.log(error)
        return null
      })
    if (!json) {
      return null
    }
    return json
  }

  const profile = await fetchProfile()
  if (profile) {
    console.log(profile)
  }
}
