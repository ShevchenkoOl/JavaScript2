import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { Header } from "../components/Header/Headr";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";

const HomePage = () => {
  const largeContent = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.
  `;

  return <div className="container">
    <Header title="Webová aplikace" />
    <Main content={largeContent}/>
    <Footer autor = "Oleksii Shevchenko"/>
  </div>;
};

document.querySelector("#root").innerHTML = render(
  <>
    <HomePage />
  </>
);
