import styles from "./style.css";
import header, { createHTMLElement } from "./views/header"
import bratsSection from './views/brats'
import contactSection from './views/contact'
import brewsSection from './views/brews'

const content = document.querySelector('#content');

content.appendChild(header)
content.appendChild(bratsSection)

const updateContent = (newSection) => {
  content.innerHTML = "";
  content.appendChild(header)
  content.appendChild(newSection)
}

content.addEventListener('click', (event) => {
  const target = event.target;

  if (target.innerHTML === 'BREWS') {
    updateContent(brewsSection)
  } else if (target.innerHTML === 'BRATS') {
    updateContent(bratsSection)
  } else if (target.innerHTML === 'CONTACT') {
    updateContent(contactSection)
  }
});