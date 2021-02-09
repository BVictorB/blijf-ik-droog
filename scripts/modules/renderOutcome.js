import createElement from './createElement'

const renderOutcome = (minutes) => {
  const container = document.querySelector('.result')
  container.innerHTML = ''

  if (minutes) {
    const
      currentDate = new Date(),
      departTime = new Date(currentDate.getTime() + minutes * 60000),
      formatDepartTime = departTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})

    const feedbackText = createElement('h2', {
      text: `Als je om ${formatDepartTime} vertrekt blijf je droog.`
    })
    container.appendChild(feedbackText)
  } else {
    const feedbackText = createElement('h2', {
      text: `Je kan het komende uur niet vertrekken zonder nat te worden.`
    })
    container.appendChild(feedbackText)
  }
}

export default renderOutcome
