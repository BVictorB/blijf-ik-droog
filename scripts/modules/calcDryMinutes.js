const calcDryMinutes = (data, neededMinutes) => {
  const dryMinutes = data.reduce((array, minute, index) => {
    minute.precipitation === 0 ? array.push(index) : null
    return array
  }, [])

  let minuteAmount = 0
  let firstMinute = null

  dryMinutes.forEach((dryMinute, index) => {
    if (minuteAmount >= neededMinutes) { return }
    if (dryMinute - 1 === dryMinutes[index - 1]) {
      minuteAmount++
      firstMinute === null ? firstMinute = dryMinute : null
    } else {
      minuteAmount = 0
      firstMinute = null
    }
  })

  return minuteAmount >= neededMinutes ? firstMinute : null
}

export default calcDryMinutes
