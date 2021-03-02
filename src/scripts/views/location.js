import { weatherEndpoint, weatherAPIKey, exclude } from '../config'
import { getCity, getData, removeChildren } from '../modules'
import { header, footer, load, detailScreen, countriesScreen } from '../components'

const location = async (lat, lng, country) => {
  removeChildren(document.body)
  document.body.append(
    load(), 
    header()
  )

  if (lat && lng) {
    const 
      weatherURL = `${weatherEndpoint}lat=${lat}&lon=${lng}&exclude=${exclude}&appid=${weatherAPIKey}`,
      weatherData = await getData(weatherURL),
      currentDate = new Date()

    const screen = detailScreen(country ? country : await getCity(lat, lng), weatherData.minutely)
    document.body.append(screen)
  } else {
    document.body.append(await countriesScreen())
  }

  document.body.append(footer())
}

export default location
