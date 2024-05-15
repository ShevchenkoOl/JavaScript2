import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
const data = await fetch("https://api.sunrise-sunset.org/json?lat=50&lng=14.5");
const sun = await data.json();
console.log(sun);

document.querySelector('#root').innerHTML = render(
  `${sun.sunrise}`
);
