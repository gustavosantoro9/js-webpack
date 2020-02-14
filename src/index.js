import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import printMe from './print.js';

function hello() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');


  return element;
}

function images() {
  const element = document.createElement('div');

  element.classList.add('image');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

function button() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(hello());
document.body.appendChild(images());
document.body.appendChild(button());