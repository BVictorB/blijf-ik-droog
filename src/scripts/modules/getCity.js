import { getData } from '.'
import { locationAPIKey, locationEndpoint } from '../config'

const getCity = (lat, lng) => {
  const loading = document.querySelector('.loading-container')
  
  loading.classList.remove('loading')

  return getData(`${locationEndpoint}q=${lat}+${lng}&key=${locationAPIKey}`)
    .then(data => data.results[0].components.city)
    .catch(err => console.log(err)) // TODO: create proper error handling
}

export default getCity
