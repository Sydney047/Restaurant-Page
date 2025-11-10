import "./menu.css";

import guacamole from "../images/guacamole.jpg";
import dip from "../images/dip.avif";
import banana from "../images/banana_smoothie.jpg";

const content = document.querySelector(".content");

function title() {
    const div = document.createElement("div");
    const header = document.createElement("h1");

    div.id = "menuTitle";
    header.textContent = "Menu";
    div.appendChild(header);
    content.appendChild(div);
}
function header(head, headTitle) {
    const div = document.createElement("div");
    const header = document.createElement("h2");

    div.className = head;
    header.textContent = headTitle;
    div.appendChild(header);
    content.appendChild(div);
}
function items(imgSource, dishName,  dishDetails, cost){
    const div = document.createElement("div");
    const image = document.createElement("img");
    const dish = document.createElement("h3");
    const serveDetails = document.createElement("p");
    const price = document.createElement("h3");

    image.src = imgSource;
    image.alt = `${dishName}`;
    dish.textContent = dishName;
    dish.className = "dish";
    serveDetails.textContent = dishDetails;
    price.textContent = cost;

    div.className = 'menuDiv';

    div.append(image, dish, serveDetails, price);
    content.appendChild(div);
}

function menu(){
    title();

    let headClass = "head Appetite";
    let headTitle = "Appetisers";
    header(headClass, headTitle);

    let dish = "Guacamole";
    let serveDetails = `${dish} is a classic dip made from avocados. It is served with tortilla chips and vegetable sticks.`;
    let price = "Rs 284";
    items(guacamole, dish, serveDetails, price);

    dish = "Spinach Artichoke Dip";
    serveDetails = "A warm, creamy favourite, combining spinach, artichoke and cheese. Perfect with bread or crackers.";
    price = "Rs 335";
    items(dip, dish, serveDetails, price);

    headClass = "head mainDish";
    headTitle = "Main Course / Entrees";
    header(headClass, headTitle);

    dish = "Vegetable Lasagna";
    serveDetails = `${dish} is a layered italian dish made with pasta sheets, a vegetable-packed sauce. Baked until golden and bubbly`;
    price = "Rs 160";
    items(dip, dish, serveDetails, price);

    dish = "Caesar Salad";
    serveDetails = "Made with romaine lettuce, croutons, and a dressing of olive oil, garlic, Parmesan cheese, lemon juice and black pepper";
    price = "Rs 250";
    items(dip, dish, serveDetails, price);

    dish = "Vegetable Pasta Bake";
    serveDetails = "This cheesy pasta bake is packed with veggies, using pasta sauce, sauce and cheese. A quick, easy and great weeknight dinner";
    price = "Rs 350";
    items(dip, dish, serveDetails, price);

    dish = "Bean And Halloumi Stew";
    serveDetails = "Freshly baked farm beans served alongside our delicious halloumi";
    price = "Rs 450";
    items(dip, dish, serveDetails, price);

    headClass = "head smoothies";
    headTitle = "Juice / Smoothies";
    header(headClass, headTitle);

    dish = "Strawberry Banana";
    serveDetails = "Frozen strawberries, a banana blent with yogurt for extra protein and richer texture";
    price = "Rs 70";
    items(banana, dish, serveDetails, price);

    dish = "Mango And Pineapple Paradise";
    serveDetails = "A frozen mango, pineapple chunks, milk and a sweetener blent with yogurt until creamy";
    price = "Rs 70"; 
    items(banana, dish, serveDetails, price);

    dish = "Mixed Berry";
    serveDetails = "We simply blend frozen berries, banana, vanilla Greek yogurt, liquid of the customer's choosing and sweetener if they desire";
    price = "Rs 85";
    items(banana, dish, serveDetails, price);

    content.appendChild(container2);
}
export { menu };