import getData from './modules/getData'
import renderOutcome from './modules/renderOutcome'
import calcDryMinutes from './modules/calcDryMinutes'
import getCoords from './modules/getCoords'
import getGeoLocation from './modules/getGeoLocation'
import { apiKey, exclude } from './config/api'
import { form, geoButton, city, neededMinutes } from './config/elements'

form.addEventListener('submit', (e) => {
  e.preventDefault()

  getCoords(city.value)
    .then(coords => {
      getData(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lng}&exclude=${exclude}&appid=${apiKey}`)
        .then(data => {
          renderOutcome(calcDryMinutes(data.minutely, neededMinutes.value))
        })
    })
})

geoButton.addEventListener('click', () => {
  console.log('Loading...')
  navigator.geolocation.getCurrentPosition(getGeoLocation)
})
