import { getData } from '.'
import { locationAPIKey, locationEndpoint } from '../config'

const getCoords = (place) => {
  const url = `${locationEndpoint}q=${place}&key=${locationAPIKey}`

  return getData(url)
    .then(data => data.results[0].geometry)
}

export default getCoords
