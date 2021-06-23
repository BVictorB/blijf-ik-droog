import { createElement } from "../../modules"
import avatarImg from '../../../images/victor.png'
import linkedin from '../../../images/linkedin.png'
import github from '../../../images/github.png'

const footer = () => {

  const avatar = createElement('img', {
    classNames: ['avatar'],
    src: avatarImg
  })

  const name = createElement('h3', {
    text: 'Victor Boucher'
  })

  const title = createElement('h4', {
    text: 'Frontend developer'
  })

  const githubIcon = createElement('img', {
    classNames: ['icon'],
    src: github
  })

  const linkedinIcon = createElement('img', {
    classNames: ['icon'],
    src: linkedin
  })

  const githubAnchor = createElement('a', {
    href: 'https://github.com/victorboucher',
    attributes: [
      {
        attr: 'target',
        val: '_blank'
      }
    ],
    children: [githubIcon]
  })

  const linkedinAnchor = createElement('a', {
    href: 'https://www.linkedin.com/in/victor-boucher-18267813b/',
    attributes: [
      {
        attr: 'target',
        val: '_blank'
      }
    ],
    children: [linkedinIcon]
  })

  const footer = createElement('footer', {
    children: [avatar, name, title, githubAnchor, linkedinAnchor]
  })

  return footer
}

export default footer
