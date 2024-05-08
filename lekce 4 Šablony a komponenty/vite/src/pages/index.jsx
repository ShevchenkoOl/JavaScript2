import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

const Header = () => {
  return (
    <header>
      <h1>Alex</h1>
      <h2>position: kouch</h2>
    </header>
  );
};

const fontStyle = 'intro';

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <Header />
    {/* <header>
      <div className="logo"></div>
      <h1>Alex kouch</h1>
    </header> */}
    <main>
      <p className={fontStyle}>Startovací šablona pro webovou aplikaci v JavaScriptu s JSX. Vytvořeno pomocí <a href="https://www.npmjs.com/package/create-kodim-app">create-kodim-app</a>.</p>
    </main>
    <footer>
      <p>Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>
);
