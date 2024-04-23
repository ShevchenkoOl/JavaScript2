import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import StoredLink from "./StoredLink";

const response = await fetch("http://localhost:4000/api/links");
const json = await response.json();
const { data } = json;

const addLink = async () => {
  const newLink = {
    URL: "https://www.facebook.com",
    name: "Facebook",
    description: "Nejlepší socialni sit",
    type: "web",
  };

  await fetch("http://localhost:4000/api/links", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newLink),
  });
  window.location.reload();
};

// console.log(links);

document.querySelector("#root").innerHTML = render(
  <div className="conteiner">
    <button id="cudlik">Click</button>
    {data.map(({ URL, name, type, description }) => (
      <StoredLink URL={URL} name={name} type={type} description={description} />
    ))}
  </div>
);

const btn = document.querySelector("#cudlik");
btn.addEventListener("click", addLink);
