import { handleRoute } from './'
import { routes } from './router'

const navigator = (e) => {
  const 
    routePath = e.target.attributes.route.value,
    formattedRoutePath = routePath.replace(/\?.*/, ''),
    routeInfo = routes.filter((route) => route.path === formattedRoutePath)[0]

  if (!routeInfo) {
    console.log('404')
  } else {
    window.history.pushState({}, '', routePath)
    handleRoute(routes)
  }
}

export default navigator
