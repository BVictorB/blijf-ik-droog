import { createElement } from "../../modules"

const locationScreen = () => {
  const title = createElement('h1', {
    text: 'Location'
  })

  const table = createElement('table', {})

  const main = createElement('main', {
    children: [title, table]
  })

  return main
}

export default locationScreen
