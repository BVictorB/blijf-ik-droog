import { weatherEndpoint, weatherAPIKey, exclude } from '../config'
import { createElement, getCity, getData, removeChildren } from '../modules'
import { header, footer, load, detailScreen, countriesScreen } from '../components'

const location = async (lat, lng, country) => {
  removeChildren(document.body)
  document.body.append(
    load(), 
    header()
  )

  if (lat && lng) {
    document.body.append(country ? detailScreen(country) : detailScreen(await getCity(lat, lng)))

    const 
      weatherURL = `${weatherEndpoint}lat=${lat}&lon=${lng}&exclude=${exclude}&appid=${weatherAPIKey}`,
      weatherData = await getData(weatherURL),
      currentDate = new Date()
      
    // const elements = weatherData.minutely.map((minute, index) => {
    //   const
    //     rainTime = new Date(currentDate.getTime() + index * 60000),
    //     formatRainTime = rainTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
    //   return createElement('p', {
    //     text: `${formatRainTime}: ${minute.precipitation}`
    //   })
    // })

    const
      svgWidth = 800,
      svgHeight = 300,
      svgNamespace = 'http://www.w3.org/2000/svg',
      barWidth = (svgWidth / weatherData.minutely.length)

    const bars = weatherData.minutely.map((minute, index) => {
      const barSize = minute.precipitation * 50
      return createElement('rect', {
        attributes: [
          {
            attr: 'y',
            val: svgHeight - barSize
          },
          {
            attr: 'height',
            val: barSize
          },
          {
            attr: 'width',
            val: barWidth - 2
          },
          {
            attr: 'transform',
            val: `translate(${[barWidth * index, 0]})`
          }
        ],
        namespace: svgNamespace
      })
    })

    const svg = createElement('svg', {
      attributes: [
        {
          attr: 'width',
          val: svgWidth
        },
        {
          attr: 'height',
          val: svgHeight
        }
      ],
      namespace: svgNamespace,
      children: bars
    })

    document.body.append(svg)
  } else {
    document.body.append(await countriesScreen())
  }

  document.body.append(footer())
}

export default location
