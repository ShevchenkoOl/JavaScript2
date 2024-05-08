import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Today } from '../component/Today/Today';

const HomePage = () => {
  return (
    <div>
      <ul>
      <li><Today day="07" month="12" year="2020" /></li>
      <li><Today day="15" month="11" year="2024" /></li>
      <li><Today day="20" month="07" year="2023" /></li>
      </ul>
    </div>
    
  );
};

document.querySelector('#root').innerHTML = render(
  <>
  <HomePage />
  </>
);
