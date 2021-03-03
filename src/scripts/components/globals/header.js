import { createElement } from '../../modules'
import { navigator } from '../../router'
import umbrella from '../../../images/umbrella.png'

const header = () => {
  const title = createElement('h1', {
    text: 'Blijf ik droog?'
  })

  const image = createElement('img', {
    src: umbrella
  })

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
    text: 'Landen',
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

  const header = createElement('header', {
    children: [image, title, homeBtn, locationBtn]
  })

  return header
}

export default header
