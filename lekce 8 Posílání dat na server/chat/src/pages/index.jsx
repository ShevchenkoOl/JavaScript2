import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <div class="container">
  <h1>Czechichat</h1>
  <h2>Poslat zprávu</h2>
  <form id="send">
    <div class="inputs">
      <label for="name">Jméno:</label>
      <input id="name" type="text" autofocus />
    </div>
    <div class="inputs">
      <label for="message">Zpráva:</label>
      <input id="message" type="text" />
    </div>
    <div class="controls">
      <button>➤ Odeslat</button>
    </div>
  </form>

  {/* <!-- bonus --> */}
  <h2>Historie zpráv</h2>
  <ul id="messages"></ul>
</div>
  </div>
);
