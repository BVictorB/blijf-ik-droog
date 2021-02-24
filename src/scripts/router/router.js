import { home, location, about } from '../views'
import { handleRoute } from './'

export const routes = [
  {
    path: '/',
    name: 'Home',
    view: home
  },
  {
    path: '/location',
    name: 'Location',
    params: ['lat', 'lng'],
    view: location
  },
  {
    path: '/about',
    name: 'About',
    view: about
  }
]

const router = () => {
  handleRoute(routes) 
}

export default router
