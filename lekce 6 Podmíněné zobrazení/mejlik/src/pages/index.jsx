import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Inbox } from '../component/inbox/inbox';

document.querySelector('#root').innerHTML = render(
  <>
 <Inbox account="radovan.holatko@mejlik.cz" messages={10} />
  </>
);
