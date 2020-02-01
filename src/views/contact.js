import { createHTMLElement } from './header';

const section = createHTMLElement('section', ['hero', 'hero--contact', 'contact']);
section.setAttribute('id', 'contact');
const div = createHTMLElement('div', ['contact__content']);
const h2 = createHTMLElement('h2', ['section__heading', 'contact__heading'], "Contact Us");
const h3 = createHTMLElement('h3', ['contact__phone'], "Phone: (805) 962-3131");
const form = createHTMLElement('form', ['form']);
const h3_1 = createHTMLElement('h3', ['form__heading'], "Get in Touch");
const label = createHTMLElement('label', ['form__label'], "Name:");
label.setAttribute('for', 'name');
const input = createHTMLElement('input', ['form__input', 'form__input--text'])
input.setAttribute('id', 'name');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', "Enter your Name");
const label2 = createHTMLElement('label', ['form__label'], "E-Mail:");
label2.setAttribute('for', 'email');
const input2 = createHTMLElement('input', ['form__input', 'form__input--email']);
input2.setAttribute('type', 'email')
input2.setAttribute('placeholder', 'exmaple@example.com')
input2.setAttribute('id', 'email');

const label3 = createHTMLElement('label', ['form__label'], 'Subject:');
label3.setAttribute('for', 'subject')
const input3 = createHTMLElement('input', ['form__input', 'form__input--text'])
input3.setAttribute('id', 'subject')
input3.setAttribute('type', 'text')
input3.setAttribute('placeholder', 'Greetings...')
const label4 = createHTMLElement('label', ['form__label'], 'Message:');
label4.setAttribute('for', 'message')
const input4 = createHTMLElement('input', ['form__input', 'form__input--textarea'])
input4.setAttribute('id', 'message')
input4.setAttribute('type', 'textarea')
const button = createHTMLElement('button', ['form__btn'], 'Send');
button.setAttribute('type', 'submit')
const iframe = createHTMLElement('iframe');
const iframeAttributes = {
  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.283468523667!2d-119.70179228512863!3d34.4195540805077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e9147918a1c93b%3A0x6218ee17f01958b3!2sHoffmann%20Brat%20Haus!5e0!3m2!1sde!2sde!4v1580466632645!5m2!1sde!2sde",
  width: "500",
  height: "245",
  frameborder: "0",
  style: "border:0;",
  allowfullscreen: ""
}
for (let key in iframeAttributes) {
  iframe.setAttribute(key, iframeAttributes[key])
}

section.appendChild(div);
section.appendChild(iframe);
div.appendChild(h2);
div.appendChild(h3);
div.appendChild(form);
form.appendChild(h3_1);
form.appendChild(label);
form.appendChild(input);
form.appendChild(label2);
form.appendChild(input2);
form.appendChild(label3);
form.appendChild(input3);
form.appendChild(label4);
form.appendChild(input4);
form.appendChild(button);

export default section;