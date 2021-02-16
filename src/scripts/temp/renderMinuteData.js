import removeChildren from '../modules/removeChildren'

const renderMinuteData = (data) => {
  const 
    table = document.querySelector('table'),
    currentDate = new Date()

  removeChildren(table)

  if (data) {
    data.forEach((data, index) => {
      const 
        rainTime = new Date(currentDate.getTime() + index * 60000),
        formatRainTime = rainTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
  
      const 
        tr = document.createElement('tr'),
        tableTime = document.createElement('td'),
        tableRain = document.createElement('td')
  
      tableTime.innerHTML = formatRainTime
      tableRain.innerHTML = `${data.precipitation} mm`
  
      tr.appendChild(tableTime)
      tr.appendChild(tableRain)
  
      table.appendChild(tr)
    })
  } else {
    alert('Location not found!')
  }
}

export default renderMinuteData
