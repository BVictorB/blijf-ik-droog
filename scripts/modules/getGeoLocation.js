import getData from './getData'
import { locationAPIKey, locationEndpoint } from '../config/api'
import { city, loading } from '../config/elements'

const getGeoLocation = (position) => {
  const 
    lat = position.coords.latitude,
    lng = position.coords.longitude
  
  loading.classList.remove('loading')

  getData(`${locationEndpoint}q=${lat}+${lng}&key=${locationAPIKey}`)
    .then(data => {
      city.value = data.results[0].components.city
    })
}

export default getGeoLocation
