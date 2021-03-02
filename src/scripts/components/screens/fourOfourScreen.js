import { createElement } from '../../modules'

const fourOfourScreen = () => {
  const title = createElement('h2', {
    classNames: ['404-message'],
    text: 'Oops.. deze pagina bestaat niet (meer).'
  })

  const main = createElement('main', {
    children: [title]
  })

  return main
}

export default fourOfourScreen
