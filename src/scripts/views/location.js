import { weatherEndpoint, weatherAPIKey, exclude } from '../config'
import { getCity, getData, removeChildren } from '../modules'
import { header, footer, load, locationScreen } from '../components'

const location = async (lat, lng) => {
  removeChildren(document.body)
  document.body.append(
    load(), 
    header(), 
    locationScreen(), 
    footer()
  )

  // TODO: generate graph to show more detail and list of cities that link to detail page etc...
  if (lat && lng) {
    const 
      weatherURL = `${weatherEndpoint}lat=${lat}&lon=${lng}&exclude=${exclude}&appid=${weatherAPIKey}`,
      weatherData = await getData(weatherURL),
      city = await getCity(lat, lng)

    console.log(city, lat, lng, weatherData)
  } else {
    console.log('Show list of cities with weather info and on click route to detail page')
  }
}

export default location
