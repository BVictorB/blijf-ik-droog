import getData from './modules/getData'
import renderMinuteData from './modules/renderMinuteData'
import getCoords from './modules/getCoords'

const 
  apiKey = 'c6d3274323a8201fd1939ef229fc0078',
  exclude = 'current,hourly,daily,alerts',
  form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const city = e.target.querySelector('input').value

  getCoords(city)
    .then(coords => {
      getData(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lng}&exclude=${exclude}&appid=${apiKey}`)
        .then(data => renderMinuteData(data.minutely))
    })
})
