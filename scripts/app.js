import getData from './modules/getData'
import renderOutcome from './modules/renderOutcome'
import calcDryMinutes from './modules/calcDryMinutes'
import getCoords from './modules/getCoords'
import getGeoLocation from './modules/getGeoLocation'
import { weatherAPIKey, weatherEndpoint, exclude } from './config/api'
import { form, geoButton, city, neededMinutes } from './config/elements'

form.addEventListener('submit', (e) => {
  e.preventDefault()

  getCoords(city.value)
    .then(coords => {
      getData(`${weatherEndpoint}lat=${coords.lat}&lon=${coords.lng}&exclude=${exclude}&appid=${weatherAPIKey}`)
        .then(data => {
          renderOutcome(calcDryMinutes(data.minutely, neededMinutes.value))
        })
    })
})

geoButton.addEventListener('click', () => {
  console.log('Loading...')
  navigator.geolocation.getCurrentPosition(getGeoLocation)
})
