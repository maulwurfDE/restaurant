import { createHTMLElement } from "./header";

const section = createHTMLElement('section', ['hero', 'hero--brews']);
section.setAttribute('id', 'brews');
const div = createHTMLElement('div', ['content']);
const h2 = createHTMLElement('h2',['section__heading'],"Brews");
const p = createHTMLElement('p',['section__text'],`"Ein Bier, bitte - One beer, please!"`);
const p2 = createHTMLElement('p',['section__text'],"Hoffmann Brat Haus offers Santa Barbara’s finest selection of European beer. Imported straight from their original breweries. Served in traditional glassware to bring out the aroma, flavor and color of each individual beer for the most enjoyable experience. Prost!")
const a = createHTMLElement('a',['menu-show'],"See Brew Menu");
a.setAttribute('id','show-menu');
a.setAttribute('href','#');

const sectionMenu = createHTMLElement('section', ['menu', 'menu--hidden'])
sectionMenu.id = 'menu'
const card = createHTMLElement('div', ['card']);
const cardLeft = createHTMLElement('div', ['card__left']);
const cardHeading = createHTMLElement('h3', ['card__heading'], 'WEIHNSTEPHANER PILSNER');
const cardText = createHTMLElement('p', ['card__text'], 'light, crisp, German 500ml');
const cardCost = createHTMLElement('p', ['card__right', 'card__text', 'card__text--cost'], 'Single - $7.5');


const card2 = createHTMLElement('div', ['card']);
const cardLeft2 = createHTMLElement('div', ['card__left']);
const cardHeading2 = createHTMLElement('h3', ['card__heading'], 'DELIRIUM TREMENS');
const cardText2 = createHTMLElement('p', ['card__text'], 'strong blonde ale, iconic pink elephant');
const cardCost2 = createHTMLElement('p', ['card__right', 'card__text', 'card__text--cost'], 'Single - $9');


const card3 = createHTMLElement('div', ['card']);
const cardLeft3 = createHTMLElement('div', ['card__left']);
const cardHeading3 = createHTMLElement('h3', ['card__heading'], 'HOFBRÄU DUNKEL');
const cardText3 = createHTMLElement('p', ['card__text'], 'dunkel lager, German 500m');
const cardCost3 = createHTMLElement('p', ['card__right', 'card__text', 'card__text--cost'], 'Single - $8');


const card4 = createHTMLElement('div', ['card']);
const cardLeft4 = createHTMLElement('div', ['card__left']);
const cardHeading4 = createHTMLElement('h3', ['card__heading'], 'ST. BERNARDUS QUADRUPLE');
const cardText4 = createHTMLElement('p', ['card__text'], 'classic Belgian strong Abbey ale');
const cardCost4 = createHTMLElement('p', ['card__right', 'card__text', 'card__text--cost'], 'Single - $9');

section.append(div,sectionMenu);
div.append(h2,p,p2,a);
sectionMenu.append(card, card2, card3, card4)
card.append(cardLeft, cardCost)
cardLeft.append(cardHeading, cardText)
card2.append(cardLeft2, cardCost2)
cardLeft2.append(cardHeading2, cardText2)
card3.append(cardLeft3, cardCost3)
cardLeft3.append(cardHeading3, cardText3)
card4.append(cardLeft4, cardCost4)
cardLeft4.append(cardHeading4, cardText4)

// Event Listener
const showMenu = document.getElementById('show-menu')

const content = document.querySelector('#content')

content.addEventListener('click', (event) => {

  if(event.target.id === "show-menu") {
    event.preventDefault();
    event.stopPropagation();
    console.log('were here')

    const menu = document.querySelector('#menu')
    menu.classList.toggle('menu--hidden')
  }
});

export default section