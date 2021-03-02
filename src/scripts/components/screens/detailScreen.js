import { createElement } from '../../modules'

const detailScreen = (city, data) => {
  const
    svgWidth = 800,
    svgHeight = 300,
    svgNamespace = 'http://www.w3.org/2000/svg',
    barWidth = (svgWidth / data.length)

  const title = createElement('h1', {
    text: `Het weer in ${city}`
  })

  // const elements = weatherData.minutely.map((minute, index) => {
  //   const
  //     rainTime = new Date(currentDate.getTime() + index * 60000),
  //     formatRainTime = rainTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
  //   return createElement('p', {
  //     text: `${formatRainTime}: ${minute.precipitation}`
  //   })
  // })

  const bars = data.map((minute, index) => {
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

  return createElement('main', {
    children: [title, svg]
  })
}

export default detailScreen
