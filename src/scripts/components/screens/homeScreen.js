import { createElement } from '../../modules'
import geoLocationImage from '../../../images/location.png'

const homeScreen = () => {
  const locationError = createElement('p', {
    text: 'Vul alsjeblieft een geldige locatie in.',
    classNames: ['location-error']
  })

  const minuteError = createElement('p', {
    text: 'Vul alsjeblieft een geldig aantal minuten in (<60).',
    classNames: ['minute-error']
  })


  const locationInput = createElement('input', {
    classNames: ['city'],
    attributes: [
      {
        attr: 'type',
        val: 'text'
      },
      {
        attr: 'placeholder',
        val: 'Huidige locatie'
      }
    ]
  })

  const locationImg = createElement('img', {
    classNames: ['geolocation'],
    src: geoLocationImage
  })

  const locationLabel = createElement('label', {
    text: 'Locatie',
    children: [locationInput, locationImg, locationError]
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
        val: 'Reistijd in minuten'
      }
    ]
  })

  const timeLabel = createElement('label', {
    text: 'Reistijd',
    children: [timeInput, minuteError]
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
