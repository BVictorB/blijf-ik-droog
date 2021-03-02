import { router, routes } from '.'
import { fourOfour } from '../views'

const navigator = (e) => {
  const 
    routePath = e.target.attributes.route.value,
    formattedRoutePath = routePath.replace(/\?.*/, ''),
    routeInfo = routes.filter((route) => route.path === formattedRoutePath)[0]

  if (!routeInfo) {
    fourOfour()
  } else {
    window.history.pushState({}, '', routePath)
    router()
  }
}

export default navigator
