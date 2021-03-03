const getData = (url) => {
  return fetch(url)
    .then(res => res.json())
    .catch(_ => null)
}

export default getData
