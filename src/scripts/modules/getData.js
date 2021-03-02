const getData = (url) => {
  return fetch(url)
    .then(res => res.json())
    .catch(err => null)
}

export default getData
