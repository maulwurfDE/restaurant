import header, { createHTMLElement, updateContent } from "../views/header"
import bratsSection from '../views/brats'
import contactSection from '../views/contact'
import brewsSection,
{
  sectionMenu,
  createMenuItem
} from '../views/brews'
import menuData from '../model/menuData'

export default (() => {
  const content = document.querySelector('#content');

  const setupNavLinkHandler = () => {
    content.addEventListener('click', (event) => {
      const target = event.target;

      if (target.innerHTML === 'BREWS') {
        updateContent(content, brewsSection)
      } else if (target.innerHTML === 'BRATS') {
        updateContent(content, bratsSection)
      } else if (target.innerHTML === 'CONTACT') {
        updateContent(content, contactSection)
      }
    })
  }

  const setupToggleMenuHandler = () => {
    content.addEventListener('click', event => {
      if (event.target.id === 'show-menu') {
        event.preventDefault()
        event.stopPropagation()

        const menu = document.querySelector('#menu')
        menu.classList.toggle('menu--hidden')
      }
    })
  }

  const generateMenu = () => {
    // Create an array of menu card nodes
    const menuNodes = menuData.map(menuItem => {
      return createMenuItem(menuItem)
    })
    // Append each menu card node to sectionMenu in Brews
    menuNodes.forEach(node => {
      sectionMenu.appendChild(node)
    })

    // Append menu to the brews section
    brewsSection.appendChild(sectionMenu)
  }

  // Initialze content of first load
  content.appendChild(header)
  content.appendChild(bratsSection)
  generateMenu()

  // Initialize all event listener
  setupNavLinkHandler()
  setupToggleMenuHandler()
})()