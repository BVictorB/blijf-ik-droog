const getData = (url) => {
  return fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err)) // TODO: create proper error handling
}

export default getData
