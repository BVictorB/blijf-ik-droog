import { createElement, removeChildren } from './'
import wetShirt from '../../images/wet-shirt.png'
import dryShirt from '../../images/dry-shirt.png'

const renderOutcome = (minutes) => {
  const 
    container = document.querySelector('.result'),
    loading = document.querySelector('.loading-container')
    
  removeChildren(container)

  const
    currentDate = new Date(),
    departTime = new Date(currentDate.getTime() + (minutes - 1) * 60000),
    formatDepartTime = departTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
  
  createElement('h2', {
    text: minutes ? `Als je om ${formatDepartTime} vertrekt blijf je droog.` : `Je kan het komende uur niet vertrekken zonder nat te worden.`,
    parent: container
  })

  createElement('img', {
    src: minutes ? dryShirt : wetShirt,
    classNames: ['result-image'],
    parent: container
  })

  loading.classList.remove('loading')
}

export default renderOutcome
