const navList = (navLinkText) => {
  const li = document.createElement('li');
  const a = document.createElement('a');

  li.classList.add('nav__list');
  a.classList.add('nav__link');
  a.innerHTML = navLinkText;
  li.appendChild(a);

  return li;
}

const createHTMLElement = (el, classList = [], textContent) => {
  const element = document.createElement(el);

  classList.forEach(myClass =>
    element.classList.add(myClass)
  );

  if (textContent) {
    element.innerHTML = textContent;
  }

  return element
}

const updateContent = (content, newSection) => {
  content.innerHTML = "";
  content.appendChild(header)
  content.appendChild(newSection)
}

const header = createHTMLElement('header', ['header']);
const h1 = createHTMLElement('h1', ['header__title'], 'Hoffman Brat Haus');
const nav = createHTMLElement('nav', ['nav']);
const ul = createHTMLElement('ul', ['nav__ul']);
const brats = navList("BRATS");
const brews = navList('BREWS');
const contact = navList('CONTACT');
header.appendChild(h1);
header.appendChild(nav);
nav.appendChild(ul);
ul.appendChild(brats);
ul.appendChild(brews);
ul.appendChild(contact);

export {
  createHTMLElement,
  updateContent
}
export default header