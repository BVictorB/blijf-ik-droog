import createElement from './createElement'

const renderOutcome = (minutes) => {
  const container = document.querySelector('.result')
  container.innerHTML = ''

  if (minutes) {
    const
      currentDate = new Date(),
      departTime = new Date(currentDate.getTime() + minutes * 60000),
      formatDepartTime = departTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})

    const feedbackText = createElement('h1', {
      text: `You should leave at ${formatDepartTime} to stay dry`
    })
    container.appendChild(feedbackText)
  } else {
    const feedbackText = createElement('h1', {
      text: `There is not enough time to stay dry`
    })
    container.appendChild(feedbackText)
  }
}

export default renderOutcome
