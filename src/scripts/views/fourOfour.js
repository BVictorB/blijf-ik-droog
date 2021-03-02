import { removeChildren } from '../modules'
import { header, footer, load, fourOfourScreen } from '../components'

const fourOfour = () => {
  removeChildren(document.body)
  document.body.append(
    load(), 
    header(), 
    fourOfourScreen(), 
    footer()
  )
}

export default fourOfour
