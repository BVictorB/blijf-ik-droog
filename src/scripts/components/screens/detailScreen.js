import { createElement } from '../../modules'

const detailScreen = (city, data) => {
  const
    svgWidth = 600,
    svgHeight = 300,
    svgNamespace = 'http://www.w3.org/2000/svg',
    barWidth = 100,
    currentDate = new Date(),
    filteredData = data.filter((_, i) => i % 6 === 0)

  const title = createElement('h1', {
    text: `Het weer in ${city}`
  })

  const bars = filteredData.map((minute, index) => {
    const 
      barSize = minute.precipitation * 30,
      rainTime = new Date(currentDate.getTime() + (index * 10) * 60000),
      formatRainTime = rainTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
      
    const rectangle = createElement('rect', {
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

    const text = createElement('text', {
      attributes: [
        {
          attr: 'x',
          val: 25
        },
        {
          attr: 'y',
          val: 25
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
        },
        {
          attr: 'style',
          val: `fill:${barSize > 275 ? 'white' : 'black'};`
        }
      ],
      html: formatRainTime,
      namespace: svgNamespace
    })

    const mm = createElement('text', {
      attributes: [
        {
          attr: 'x',
          val: 20
        },
        {
          attr: 'y',
          val: 285
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
        },
        {
          attr: 'style',
          val: `fill:${barSize > 20 ? 'white' : 'black'};`
        }
      ],
      html: `${Math.round(minute.precipitation * 10) / 10} mm`,
      namespace: svgNamespace
    })

    return createElement('g', {
      children: [rectangle, text, mm],
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
