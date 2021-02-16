import { weatherEndpoint, weatherAPIKey, exclude } from '../config'
import { getCity, getData } from '../modules'
import renderMinuteData from '../temp/renderMinuteData'

const location = async (lat, lng) => {
  const view = document.querySelector('.view')
  view.innerHTML = html

  if (lat && lng) {
    const 
      weatherURL = `${weatherEndpoint}lat=${lat}&lon=${lng}&exclude=${exclude}&appid=${weatherAPIKey}`,
      weatherData = await getData(weatherURL)
      
    renderMinuteData(weatherData.minutely)
    const city = await getCity(lat, lng)
    console.log(city)

  }
}

const html = `
<h1>Location</h1>
<table></table>
`

export default location
