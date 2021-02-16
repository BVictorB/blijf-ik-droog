import getData from './getData'
import { locationAPIKey, locationEndpoint } from '../config/api'

const getGeoLocation = (position) => {
  const 
    lat = position.coords.latitude,
    lng = position.coords.longitude,
    form = document.querySelector('form'),
    city = form.querySelectorAll('input')[0],
    loading = document.querySelector('.loading-container')
  
  loading.classList.remove('loading')

  getData(`${locationEndpoint}q=${lat}+${lng}&key=${locationAPIKey}`)
    .then(data => {
      city.value = data.results[0].components.city
    })
}

export default getGeoLocation
