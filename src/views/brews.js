import { createHTMLElement } from "./header";

const section = createHTMLElement('section', ['hero', 'hero--brews']);
section.setAttribute('id', 'brews');
const div = createHTMLElement('div', ['content']);
const h2 = createHTMLElement('h2', ['section__heading'], "Brews");
const p = createHTMLElement('p', ['section__text'], `"Ein Bier, bitte - One beer, please!"`);
const p2 = createHTMLElement('p', ['section__text'], "Hoffmann Brat Haus offers Santa Barbara’s finest selection of European beer. Imported straight from their original breweries. Served in traditional glassware to bring out the aroma, flavor and color of each individual beer for the most enjoyable experience. Prost!")
const a = createHTMLElement('a', ['menu-show'], "See Brew Menu");
a.setAttribute('id', 'show-menu');
a.setAttribute('href', '#');

const sectionMenu = createHTMLElement('section', ['menu', 'menu--hidden'])
sectionMenu.id = 'menu'

section.append(div);
div.append(h2, p, p2, a);

// Event Listener
const showMenu = document.getElementById('show-menu')
const content = document.querySelector('#content')

export const createMenuItem = (menuItem) => {
  const card = createHTMLElement('div', ['card']);
  const cardLeft = createHTMLElement('div', ['card__left']);
  const cardHeading = createHTMLElement('h3', ['card__heading'], menuItem.title);
  const cardText = createHTMLElement('p', ['card__text'], menuItem.text);
  const cardCost = createHTMLElement('p', ['card__right', 'card__text', 'card__text--cost'], menuItem.cost);

  card.append(cardLeft, cardCost)
  cardLeft.append(cardHeading, cardText)

  return card;
}

export default section
export {
  section,
  sectionMenu
}