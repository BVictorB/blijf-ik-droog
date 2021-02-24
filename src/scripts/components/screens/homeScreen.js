import { createElement } from '../../modules'
import geoLocationImage from '../../../images/location.png'

const homeScreen = () => {
  const locationInput = createElement('input', {
    classNames: ['city'],
    attributes: [
      {
        attr: 'type',
        val: 'text'
      },
      {
        attr: 'placeholder',
        val: 'Locatie'
      }
    ]
  })

  const locationImg = createElement('img', {
    classNames: ['geolocation'],
    src: geoLocationImage
  })

  const locationLabel = createElement('label', {
    text: 'Locatie',
    children: [locationInput, locationImg]
  })

  const timeInput = createElement('input', {
    classNames: ['minutes'],
    attributes: [
      {
        attr: 'type',
        val: 'number'
      },
      {
        attr: 'placeholder',
        val: 'Reistijd'
      }
    ]
  })

  const timeLabel = createElement('label', {
    text: 'Reistijd',
    children: [timeInput]
  })

  const button = createElement('button', {
    text: 'Bekijk resultaat',
    attributes: [
      {
        attr: 'type',
        val: 'submit'
      }
    ]
  })

  const form = createElement('form', {
    children: [locationLabel, timeLabel, button]
  })

  const result = createElement('div', {
    classNames: ['result']
  })

  const main = createElement('main', {
    children: [form, result]
  })

  return main
}

export default homeScreen
