import getData from '../modules/getData'
import renderOutcome from '../modules/renderOutcome'
import calcDryMinutes from '../modules/calcDryMinutes'
import getCoords from '../modules/getCoords'
import getGeoLocation from '../modules/getGeoLocation'
import { weatherAPIKey, weatherEndpoint, exclude } from '../config/api'
import geoLocationImage from '../../images/location.png'

const home = () => {
  const view = document.querySelector('.view')
  view.innerHTML = html
  
  const
    form = document.querySelector('form'),
    geoButton = document.querySelector('.geolocation'),
    city = form.querySelectorAll('input')[0],
    neededMinutes = form.querySelectorAll('input')[1],
    loading = document.querySelector('.loading-container')

  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    loading.classList.add('loading')
  
    const 
      coords = await getCoords(city.value),
      weatherURL = `${weatherEndpoint}lat=${coords.lat}&lon=${coords.lng}&exclude=${exclude}&appid=${weatherAPIKey}`,
      weatherData = await getData(weatherURL),
      dryMinutes = calcDryMinutes(weatherData.minutely, neededMinutes.value)
    
    renderOutcome(dryMinutes)
  })
  
  geoButton.addEventListener('click', () => {
    loading.classList.add('loading')
    navigator.geolocation.getCurrentPosition(getGeoLocation)
  })
}

const html = `
<form action="">
  <label>
    Locatie
    <input class="city" type="text" placeholder="Locatie"/>
    <img class="geolocation" src="${geoLocationImage}" alt="">
  </label>
  <label>
    Reistijd
    <input class="minutes" type="number" placeholder="Reistijd"/>
  </label>
  <button type="submit">Bekijk resultaat</button>
</form>
<div class="result"></div>
`

export default home
