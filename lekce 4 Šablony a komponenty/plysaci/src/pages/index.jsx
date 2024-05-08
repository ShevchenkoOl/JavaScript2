import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";


const name1 = 'Silvestr';
const image1 = 'https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/elephant.jpg';
const text1 =
  'Silvestr rád pozoruje dění za oknem a upřímně se usmívá na všechno kolemjdoucí.';

const Silvestr = () => {
  return (
  <div className="plushy">
  <img className="plushy__image" width='200' height='200' src={image1} />
  <h2 className="plushy__name">{name1}</h2>
  <p className="plushy__text">{text1}</p>
</div>
);
};

const name2 = 'Ctirad';
const image2 = 'https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/mouse.jpg';
const text2 =
  'Ctirad tráví svůj čas v blízkosti lednice a s očekáváním pozoruje její bílé dveře.';

  const Ctirad = () => {
    return(
    <div className="plushy">
    <img className="plushy__image" width='200' height='200' src={image2} />
    <h2 className="plushy__name">{name2}</h2>
    <p className="plushy__text">{text2}</p>
  </div>
  );
  };

document.querySelector("#root").innerHTML = render(
  <div className="container">
    <h1>Plyšáci</h1>
    <Silvestr />
    <Ctirad />
  </div>
);
