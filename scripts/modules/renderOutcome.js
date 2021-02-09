import createElement from './createElement'
import wetShirt from '../../images/wet-shirt.png'
import dryShirt from '../../images/dry-shirt.png'

const renderOutcome = (minutes) => {
  const container = document.querySelector('.result')
  container.innerHTML = ''

  if (minutes) {
    const
      currentDate = new Date(),
      departTime = new Date(currentDate.getTime() + (minutes - 1) * 60000),
      formatDepartTime = departTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})

    const feedbackText = createElement('h2', {
      text: `Als je om ${formatDepartTime} vertrekt blijf je droog.`
    })
    const feedbackImage = createElement('img', {
      src: dryShirt,
      classNames: ['result-image']
    })
    container.appendChild(feedbackText)
    container.appendChild(feedbackImage)
  } else {
    const feedbackText = createElement('h2', {
      text: `Je kan het komende uur niet vertrekken zonder nat te worden.`
    })
    const feedbackImage = createElement('img', {
      src: wetShirt,
      classNames: ['result-image']
    })
    container.appendChild(feedbackText)
    container.appendChild(feedbackImage)
  }
}

export default renderOutcome
