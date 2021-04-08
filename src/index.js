import { cube } from './math';

function component() {
  const element = document.createElement('pre');

  element.innerHTML = [
    'Hello Webpack',
    '5 cubed is ' + cube(5),
  ].join('\n');

  return element;
}

document.body.appendChild(component());
