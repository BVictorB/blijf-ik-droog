import { createElement } from '../../modules'

const detailScreen = (city) => {
  return createElement('h1', {
    text: `Het weer in ${city}`
  })
}

export default detailScreen
