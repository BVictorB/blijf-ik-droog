import { createElement, removeChildren } from './'
import { navigator } from '../router'
import wetShirt from '../../images/wet-shirt.png'
import dryShirt from '../../images/dry-shirt.png'

const renderOutcome = (minutes, city, coords) => {
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

  createElement('button', {
    text: `More info about ${city}`,
    attributes: [
      {
        attr: 'route',
        val: `/location?lat=${coords.lat}&lng=${coords.lng}`
      }
    ],
    eventListener: {
      on: 'click',
      func: navigator
    },
    parent: container
  })

  loading.classList.remove('loading')
}

export default renderOutcome
