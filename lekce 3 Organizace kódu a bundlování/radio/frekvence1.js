import {radio, createMarkup, renderNavigation} from "./radio.js";

const container = document.querySelector(".container");
const header = document.querySelector(".header");
const station = radio[1];

container.innerHTML = createMarkup(station);


header.innerHTML = renderNavigation();