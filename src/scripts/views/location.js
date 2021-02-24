import { weatherEndpoint, weatherAPIKey, exclude } from '../config'
import { getCity, getData, removeChildren } from '../modules'
import { header, footer, load, locationScreen } from '../components'
import renderMinuteData from '../temp/renderMinuteData'

const location = async (lat, lng) => {
  removeChildren(document.body)
  document.body.append(load())
  document.body.append(header())
  document.body.append(locationScreen())
  document.body.append(footer())

  if (lat && lng) {
    const 
      weatherURL = `${weatherEndpoint}lat=${lat}&lon=${lng}&exclude=${exclude}&appid=${weatherAPIKey}`,
      weatherData = await getData(weatherURL)
      
    renderMinuteData(weatherData.minutely)
    const city = await getCity(lat, lng)
    console.log(city)
  }
}

export default location
