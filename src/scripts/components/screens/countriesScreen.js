import { createElement, getData } from '../../modules'
import { navigator } from '../../router'

const countriesScreen = async () => {
  const 
    url = 'https://restcountries.eu/rest/v2/region/europe',
    data = await getData(url)

  const countries = data.map(country => {
    return {
      'country': country.translations.nl,
      'capital': country.capital,
      'flag': country.flag,
      'lat': country.latlng[0],
      'lng': country.latlng[1]
    }
  })
  
  const elements = countries.map(country => {
    const title = createElement('h4', {
      text: country.country
    })

    const image = createElement('img', {
      src: country.flag,
      classNames: ['country-flag']
    })

    const button = createElement('button', {
      text: `Meer informatie over ${country.country}`,
      attributes: [
        {
          attr: 'route',
          val: `/location?lat=${country.lat}&lng=${country.lng}&country=${country.country}`
        }
      ],
      eventListener: {
        on: 'click',
        func: navigator
      }
    })

    return createElement('div', {
      classNames: ['country-block'],
      children: [title, image, button]
    })
  })

  const countryContainer = createElement('div', {
    classNames: ['country-container'],
    children: elements
  })

  const container = createElement('main', {
    children: [countryContainer]
  })

  return container
}

export default countriesScreen
