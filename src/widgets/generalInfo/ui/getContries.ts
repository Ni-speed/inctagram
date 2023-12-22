type CountryType = {
  label: string
  value: string
}
export type CountriesList = CountryType[] | null

type Callback = (countryList: CountriesList) => void

export const getCountries = async (setCountryList: Callback) => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all')

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()

    const names = data.map((country: any) => {
      return { label: country.name.common, value: country.name.common }
    })

    names.sort((a: CountryType, b: CountryType) => {
      const nameA = a.label.toUpperCase()
      const nameB = b.label.toUpperCase()

      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }

      return 0
    })

    setCountryList(names)
  } catch (error) {
    console.error('Error fetching countries:')
  }
}
