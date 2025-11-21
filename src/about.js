import "./about.css";

const content = document.querySelector(".content");

function title() {
    const div = document.createElement("div");
    const header = document.createElement("h1");

    div.id = "aboutTitle";
    header.textContent = "Reach Us For More Enquires";
    div.appendChild(header);
    content.appendChild(div);
}
function createElement(heading, digits, mailId, socials){
    const div = document.createElement("div");
    const head = document.createElement("h3");
    const contact = document.createElement("p");
    const mail = document.createElement("p");
    const social = document.createElement("p");

    head.textContent = heading;
    contact.textContent = `Phone number: ${digits}`;
    mail.textContent = `Email: ${mailId}`;
    social.textContent = `Media: ${socials}`;
    div.append(head, contact, mail, social);
    content.appendChild(div);
}
function about(){
    title();

    let heading = "Sydney Sage";
    let digits = "555-232-775";
    let mailId = "reallyObviousEmail@real.com";
    let socials = "@fatherGreen/socialAccount";
    createElement(heading, digits, mailId, socials);

    heading = "Mother Earth";
    digits = "555-232-776";
    mailId = "perfectlyAuthenticEmail@real.com";
    socials = "@MotherEarth/socialAccount";
    createElement(heading, digits, mailId, socials);

    heading = "Element Earth";
    digits = "555-232-777";
    mailId = "coolAndMysteriousEmail@real.com";
    socials = "@ElementalSon/socialAccount";
    createElement(heading, digits, mailId, socials);
}
export { about };