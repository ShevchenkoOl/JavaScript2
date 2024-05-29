import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

const cities = [
  'Praha',
  'Brno',
  'Ostrava',
  'Plzeň',
  'Liberec',
  'Olomouc',
  'České Budějovice',
  'Hradec Králové',
  'Ústí nad Labem',
  'Pardubice',
];

const CityElements = () => (
  <div>
    {cities.map((city, index) => (<div className="city" key={index}>{city}</div>))}
  </div>
    );

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <CityElements />
  </div>
);
