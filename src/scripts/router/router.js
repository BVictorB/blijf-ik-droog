import { routes } from '.'
import { fourOfour } from '../views'

const router = () => {
  const 
    urlParameter = new URLSearchParams(window.location.search),
    currentPath = window.location.pathname,
    route = routes.filter((route) => route.path === currentPath)[0]
  
  if (route && route.params) {
    const params = route.params.map(param => urlParameter.get(param))
    route.view(...params)
  } else if (route) {
    route.view()
  } else {
    fourOfour()
  }
}

export default router
