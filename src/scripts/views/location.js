import { weatherEndpoint, weatherAPIKey, exclude } from '../config'
import { getCity, getData, removeChildren } from '../modules'
import { header, footer, load, locationScreen } from '../components'
import renderMinuteData from '../temp/renderMinuteData'

const location = async (lat, lng) => {
  removeChildren(document.body)
  document.body.append(
    load(), 
    header(), 
    locationScreen(), 
    footer()
  )

  if (lat && lng) {
    const 
      weatherURL = `${weatherEndpoint}lat=${lat}&lon=${lng}&exclude=${exclude}&appid=${weatherAPIKey}`,
      weatherData = await getData(weatherURL)
      
    renderMinuteData(weatherData.minutely)
    const city = await getCity(lat, lng)
    console.log(city, lat, lng)
  }
}

export default location
