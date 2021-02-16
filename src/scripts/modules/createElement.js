const createElement = (tag, { classNames, text, src, href, children, parent }) => {
  const el = document.createElement(tag)

  classNames && classNames.forEach(className => el.classList.add(className))
  text && (el.innerText = text)
  src && (el.src = src)
  href && (el.href = href)
  children && children.forEach(child => el.appendChild(child))
  parent && parent.appendChild(el)

  return el
}

export default createElement
