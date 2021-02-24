import { navigator } from '../../router'
import { createElement } from "../../modules"

const footer = () => {
  const homeBtn = createElement('button', {
    text: 'Home',
    attributes: [
      {
        attr: 'route',
        val: '/'
      }
    ],
    eventListener: {
      on: 'click',
      func: navigator
    }
  })

  const locationBtn = createElement('button', {
    text: 'Location',
    attributes: [
      {
        attr: 'route',
        val: '/location'
      }
    ],
    eventListener: {
      on: 'click',
      func: navigator
    }
  })

  const footer = createElement('footer', {
    children: [homeBtn, locationBtn]
  })

  return footer
}

export default footer
