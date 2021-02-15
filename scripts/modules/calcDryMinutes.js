const calcDryMinutes = (data, neededMinutes) => {
  let 
    minuteAmount = 0,
    firstMinute = null

  const dryMinutes = data.reduce((array, minute, index) => {
    minute.precipitation === 0 && array.push(index)
    return array
  }, [])

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
