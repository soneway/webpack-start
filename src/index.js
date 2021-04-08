// import './style.css';
// import logo from './logo.png';
// import xmlData from './xml.xml';

// console.log('xmlData', xmlData);

function component() {
  var element = document.createElement('div');

  element.innerHTML = 'Hello World';
  element.classList.add('hello');

  // const logoImg = new Image();
  // logoImg.src = logo;
  // element.appendChild(logoImg);

  return element;
}

document.body.appendChild(component());
