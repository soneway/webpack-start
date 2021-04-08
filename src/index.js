import './style.css';
// import logo from './logo.png';
// import xmlData from './xml.xml';

// console.log('xmlData', xmlData);

import printMe from './print';

function component() {
  var element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = 'Hello World';
  element.classList.add('hello');

  // const logoImg = new Image();
  // logoImg.src = logo;
  // element.appendChild(logoImg);

  btn.innerHTML = 'Click and console';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
