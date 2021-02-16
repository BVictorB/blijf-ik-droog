import { home, location, about } from '../views'

const router = () => {
  const 
    view = document.querySelector('.view'),
    buttons = document.querySelectorAll('[route]')
  
  const navigator = (e) => {
    const routePath = e.target.attributes.route.value
    const routeInfo = routes.filter((route) => route.path === routePath)[0]

    if (!routeInfo) {
      view.innerHTML = '404'
    } else {
      window.history.pushState({}, '', routeInfo.path)
      handleRoute()
    }
  }
  
  buttons.forEach((button) => {
    button.addEventListener('click', navigator)
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
  
  const handleRoute = () => {
    const currentPath = window.location.pathname
    const route = routes.filter((route) => route.path === currentPath)[0]
    route ? route.view() : console.log('404')
  }
  
  handleRoute() 
}

export default router
