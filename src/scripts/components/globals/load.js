import { createElement } from '../../modules'

const load = () => {
  const emptyDiv = createElement('div', {})

  const loadingRing = createElement('div', {
    classNames: ['loading-ring'],
    children: [emptyDiv, emptyDiv, emptyDiv, emptyDiv]
  })

  const dot = createElement('span', {
    text: '.'
  })

  const loadingText = createElement('h2', {
    classNames: ['loading-text'],
    text: 'Loading',
    children: [dot, dot, dot]
  })
  const div = createElement('div', {
    children: [loadingRing, loadingText]
  })

  const loadingContainer = createElement('div', {
    classNames: ['loading-container'],
    children: [div]
  })

  return loadingContainer
}

export default load
