import { about } from "./about";
import { home } from "./home";
import { menu } from "./menu";

const container = document.querySelector(".content");
const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const aboutBtn = document.querySelector("#contactBtn");

home();

menuBtn.addEventListener('click', () => {
        container.replaceChildren();
        menu();
});
homeBtn.addEventListener('click', () => {
        container.replaceChildren();
        home();
});

aboutBtn.addEventListener('click', () => {
        container.replaceChildren();
        about();
});
