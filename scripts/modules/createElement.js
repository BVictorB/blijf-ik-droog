const createElement = (tag, { classNames, text, src, href, children }) => {
  const el = document.createElement(tag)

  classNames ? classNames.forEach(className => el.classList.add(className)) : null
  text ? el.innerText = text : null
  src ? el.src = src : null
  href ? el.href = href : null
  children ? children.forEach(child => el.appendChild(child)) : null

  return el
}

export default createElement
