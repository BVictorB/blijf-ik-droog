import { home, location } from '../views'

const routes = [
  {
    path: '/',
    name: 'Home',
    view: home
  },
  {
    path: '/location',
    name: 'Location',
    params: ['lat', 'lng', 'country'],
    view: location
  }
]

export default routes
