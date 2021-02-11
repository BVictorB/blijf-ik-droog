import getData from './modules/getData'
import renderOutcome from './modules/renderOutcome'
import calcDryMinutes from './modules/calcDryMinutes'
import getCoords from './modules/getCoords'
import getGeoLocation from './modules/getGeoLocation'
import { weatherAPIKey, weatherEndpoint, exclude } from './config/api'
import { form, geoButton, city, neededMinutes } from './config/elements'

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const 
    coords = await getCoords(city.value),
    weatherURL = `${weatherEndpoint}lat=${coords.lat}&lon=${coords.lng}&exclude=${exclude}&appid=${weatherAPIKey}`,
    weatherData = await getData(weatherURL),
    dryMinutes = calcDryMinutes(weatherData.minutely, neededMinutes.value)
  
  renderOutcome(dryMinutes)
})

geoButton.addEventListener('click', () => {
  geoButton.classList.add('loading')
  navigator.geolocation.getCurrentPosition(getGeoLocation)
})
