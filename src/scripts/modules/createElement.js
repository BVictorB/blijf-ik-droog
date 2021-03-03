const createElement = (tag, { classNames, attributes, text, src, href, children, parent, eventListener, namespace, html }) => {
  const el = namespace ? document.createElementNS(namespace, tag) : document.createElement(tag)

  classNames && classNames.forEach(className => el.classList.add(className))
  attributes && attributes.forEach(attribute => el.setAttribute(attribute.attr, attribute.val))
  html && (el.innerHTML = html)
  text && (el.innerText = text)
  src && (el.src = src)
  href && (el.href = href)
  children && children.forEach(child => el.appendChild(child))
  parent && parent.appendChild(el)
  eventListener && el.addEventListener(eventListener.on, eventListener.func)

  return el
}

export default createElement
