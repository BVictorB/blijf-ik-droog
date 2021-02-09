import getData from './getData'
import renderOutcome from './renderOutcome'
import calcDryMinutes from './calcDryMinutes'
import { weatherAPIKey, exclude } from '../config/api'
import { neededMinutes } from '../config/elements'

const getGeoLocation = (position) => {
  const 
    lat = position.coords.latitude,
    lng = position.coords.longitude

  getData(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=${exclude}&appid=${weatherAPIKey}`)
    .then(data => {
      renderOutcome(calcDryMinutes(data.minutely, neededMinutes.value))
    })
}

export default getGeoLocation
