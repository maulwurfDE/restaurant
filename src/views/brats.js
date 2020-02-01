import { createHTMLElement } from "./header";

const section = createHTMLElement('section', ['hero', 'hero--brats']);
section.setAttribute('id', 'brats');

const div = createHTMLElement('div', ['content-background']);
const h2 = createHTMLElement('h2', ['section__heading'], "Hours");
const p1 = createHTMLElement('p', ['section__text'], "Mon-Wed 11:30am - 9pm");
const p2 = createHTMLElement('p', ['section__text'], "Thursday 11:30am - 9:30pm");
const p3 = createHTMLElement('p', ['section__text'], "Friday 11:30am - 10pm");
const p4 = createHTMLElement('p', ['section__text'], "Saturday 10:00am - 10pm");
const p5 = createHTMLElement('p', ['section__text'], "Sunday 10:00am - 9:30pm");
const p6 = createHTMLElement('p', ['section__text', 'section__text--red'], "Happy Hour 2-6pm except Saturdays");

const contents = [h2, p1, p2, p3, p4, p5, p6];

section.appendChild(div);

contents.forEach(node => {
  div.appendChild(node);
})

export default section;