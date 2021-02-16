import { home, location, about } from '../views'
import { navigator, handleRoute } from './'

const router = () => {
  const buttons = document.querySelectorAll('[route]')
  
  buttons.forEach((button) => {
    button.addEventListener('click', e => navigator(e, routes))
  })
  
  const routes = [
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
  
  handleRoute(routes) 
}

export default router
