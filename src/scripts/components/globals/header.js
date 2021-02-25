import { createElement } from '../../modules'
import umbrella from '../../../images/umbrella.png'

const header = () => {
  const title = createElement('h1', {
    text: 'Blijf ik droog?'
  })

  const image = createElement('img', {
    src: umbrella
  })

  const header = createElement('header', {
    children: [image, title]
  })

  return header
}

export default header
