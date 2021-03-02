import { getData, renderOutcome, calcDryMinutes, getCoords, getCity, removeChildren } from '../modules'
import { weatherAPIKey, weatherEndpoint, exclude } from '../config'
import { header, footer, load, homeScreen } from '../components'

const home = () => {
  removeChildren(document.body)
  document.body.append(
    load(), 
    header(), 
    homeScreen(), 
    footer()
  )

  const
    form = document.querySelector('form'),
    geoButton = document.querySelector('.geolocation'),
    city = form.querySelectorAll('input')[0],
    neededMinutes = form.querySelectorAll('input')[1],
    loading = document.querySelector('.loading-container'),
    minuteError = document.querySelector('.minute-error'),
    locationError = document.querySelector('.location-error')

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    if (city.value) {
      locationError.classList.remove('error')
    } else {
      locationError.classList.add('error')
      return
    }

    if (neededMinutes.value && neededMinutes.value <= 60) {
      minuteError.classList.remove('error')
    } else {
      minuteError.classList.add('error')
      return
    }

    loading.classList.add('loading')

    const coords = await getCoords(city.value)

    if (!coords) {
      loading.classList.remove('loading')
      locationError.classList.add('error')
      return
    }
  
    const 
      weatherURL = `${weatherEndpoint}lat=${coords.lat}&lon=${coords.lng}&exclude=${exclude}&appid=${weatherAPIKey}`,
      weatherData = await getData(weatherURL)

    if (!weatherData) {
      loading.classList.remove('loading')
      locationError.classList.add('error')
      return
    }
    
    renderOutcome(calcDryMinutes(weatherData.minutely, neededMinutes.value), city.value, coords)
  })
  
  geoButton.addEventListener('click', () => {
    loading.classList.add('loading')
    navigator.geolocation.getCurrentPosition(async (pos) => {
      city.value = await getCity(pos.coords.latitude, pos.coords.longitude)
    })
  })
}

export default home
