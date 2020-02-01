import styles from "./style.css";
import header, { createHTMLElement } from "./views/header"
import bratsSection from './views/brats'
import contactSection from './views/contact'

console.log(header)
const content = document.querySelector('#content');

content.appendChild(header)
content.appendChild(bratsSection)