import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import City from '../components/City/City';
import { cities } from '../cz-cities';


const App = () => (
  <div className="container">
    {cities.map((city) => (
      <City
        key={city.name}
        name={city.name}
        photo={city.photo}
        population={city.population}
        district={city.district}
        area={city.area}
      />
    ))}
  </div>
);

document.querySelector('#root').innerHTML = render(
  <div className="container">
   <App />
  </div>
);
