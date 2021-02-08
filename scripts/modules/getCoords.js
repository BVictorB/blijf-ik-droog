import getData from './getData'

const getCoords = (place) => {
  const 
    apiKey = 'c2b0d7efe5404c009235e07bcaf81a3a',
    url = `https://api.opencagedata.com/geocode/v1/json?q=${place}&key=${apiKey}`

  return getData(url)
    .then(data => data.results[0].geometry)
}

export default getCoords
