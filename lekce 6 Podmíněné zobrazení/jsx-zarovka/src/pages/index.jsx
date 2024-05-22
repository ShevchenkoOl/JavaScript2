import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Bubl } from '../components/bubl/Bubl';
import buldlOn from '../img/bulb-on.png';
import bulbOff from '../img/bulb-off.png';

document.querySelector('#root').innerHTML = render(
  <>
  <Bubl src={bulbOff} name="Bulb Off" on={false} />
  <Bubl src={buldlOn} name="Bulb On"/>
  </>
);
