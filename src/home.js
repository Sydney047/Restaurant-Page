import "./home.css";

const content = document.querySelector(".content");

function title() {
        const div = document.createElement("div");
        const header = document.createElement("h1");

        div.id = "homeTitle";
        header.textContent = "Sydney's Greens cafe";
        div.appendChild(header);
        content.appendChild(div);
}
function createElement(heading, explained){
        const div = document.createElement("div");
        const head = document.createElement("h3");
        const details = document.createElement("p");

        head.textContent = heading;
        details.textContent = explained;
        div.append(head, details);
        content.appendChild(div);
}
function workHours(){
        const div = document.createElement("div");
        const head = document.createElement("h3");
        const monday = document.createElement("p");
        const tuesday = document.createElement("p");
        const wednesday = document.createElement("p");
        const thursday = document.createElement("p");
        const friday = document.createElement("p");

        head.textContent = "Working Hours";
        monday.textContent = "Monday: 6am to 6.30pm";
        tuesday.textContent = "Tuesday: 8am to 7pm";
        wednesday.textContent = "Wednesday: 8am to 7pm";
        thursday.textContent = "Thursday: 8am to 7pm";
        friday.textContent = "Friday: 7am to 9pm";

        div.className = "homeDiv";

        div.append(head, monday, tuesday, thursday, friday);
        content.appendChild(div);
}
function home(){
        title();

        let heading = "Get To Know Us";
        let explained = "The Corner Cafe is a student focused restaurant mainly known for our study friendly environment, comfy gadget friendly booths and most importantly our delicious meals and refreshing drink and coffee options. Any one can provide a delicious meal but here at Corner Cafe we make it taste like home.";
        createElement(heading, explained);
        workHours();

        heading = "Location";
        explained = "We are found at the Corner Building in Bathinda. The building is found in the very known city of Fateh Naubad 200 metres from the local bank which is placed along Bathinda main road. You are more than welcome to visit us, we look forward to your visit.";
        createElement(heading, explained);
}
export { home };