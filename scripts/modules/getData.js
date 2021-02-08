const getData = (url) => {
  return fetch(url)
    .then(res => res.json())
    .catch((err) => console.log(`Error: ${err}`))
}

export default getData
