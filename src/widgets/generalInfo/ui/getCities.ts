type CitiesList = any | null
//type CountryFromFormType = string
type Callback = (countryList: CitiesList) => void

export const getCities = async (countryFromForm: string, setCitiesList: Callback) => {
  const url = 'https://countriesnow.space/api/v0.1/countries/cities'
  const requestBody = {
    country: countryFromForm,
  }

  try {
    const response = await fetch(url, {
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const citiesData = await response.json()

    const citiesList = citiesData.data.map((city: string[]) => {
      return { label: city, value: city }
    })

    setCitiesList(citiesList)
  } catch (error) {
    console.error('Error fetching cities:')
  }
}
