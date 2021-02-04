const 
  apiKey = 'c6d3274323a8201fd1939ef229fc0078',
  lat = '55.860916', // Coords of Glasgow (because it always rains there)
  lon = '-4.251433',
  exclude = 'current,hourly,daily,alerts',
  list = document.querySelector('ul'),
  url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${apiKey}`

// API call for current weather
// const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`

fetch(url)
  .then(
    (res) => {
      res.json().then((data) => {
        console.log(data)
        displayAllMinuteData(data.minutely)
      })
    }
  )
  .catch((err) => {
    console.log(`Error: ${err}`)
  })

const displayAllMinuteData = (data) => {
  const d = new Date()

  data.forEach((data, index) => {
    const 
      minute = d.getMinutes() + index >= 60 ? d.getMinutes()+index - 60 : d.getMinutes() + index,
      formattedMinute = minute < 10 ? `0${minute}` : minute,
      hour = d.getMinutes() + index >= 60 ? d.getHours() + 1 : d.getHours()

    const li = document.createElement('li')
    li.innerHTML = `${hour}:${formattedMinute}: ${data.precipitation}mm`
    list.appendChild(li)
  }) 
}
