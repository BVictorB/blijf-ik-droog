const handleRoute = (routes) => {
  const 
    urlParameter = new URLSearchParams(window.location.search),
    lat = urlParameter.get('lat'),
    lng = urlParameter.get('lng')

  const currentPath = window.location.pathname
  const route = routes.filter((route) => route.path === currentPath)[0]
  route ? route.view(lat, lng) : console.log('404')
}

export default handleRoute
