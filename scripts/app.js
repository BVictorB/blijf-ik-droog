import getData from './modules/getData'
import renderMinuteData from './modules/renderMinuteData'

const 
  apiKey = 'c6d3274323a8201fd1939ef229fc0078',
  exclude = 'current,hourly,daily,alerts',
  form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const 
    inputs = e.target.querySelectorAll('input'),
    lat = inputs[0].value,
    lon = inputs[1].value,
    url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${apiKey}`

    getData(url)
      .then(data => renderMinuteData(data.minutely))
})
