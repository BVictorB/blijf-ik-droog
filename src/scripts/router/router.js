import { home, location, about } from '../views'
import { navigator, handleRoute } from './'

export const routes = [
  {
    path: '/',
    name: 'Home',
    view: home
  },
  {
    path: '/location',
    name: 'Location',
    view: location
  },
  {
    path: '/about',
    name: 'About',
    view: about
  }
]

const router = () => {
  const buttons = document.querySelectorAll('[route]')
  
  buttons.forEach((button) => {
    button.addEventListener('click', e => navigator(e, routes))
  })
  
  handleRoute(routes) 
}

export default router
