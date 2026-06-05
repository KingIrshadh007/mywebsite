/* ====================================
   THEME SWITCHER
==================================== */

const themeToggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light");
}

themeToggle?.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        localStorage.setItem("theme","light");
    }else{
        localStorage.setItem("theme","dark");
    }

});


/* ====================================
   SIDEBAR TOGGLE
==================================== */

const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");

sidebarToggle?.addEventListener("click", () => {

    sidebar.classList.toggle("collapsed");

});


/* ====================================
   TOOL SEARCH
==================================== */

const searchInput = document.getElementById("toolSearch");

searchInput?.addEventListener("keyup", function(){

    const value = this.value.toLowerCase();

    const items = document.querySelectorAll(".nav-item");

    items.forEach(item => {

        const text = item.textContent.toLowerCase();

        if(text.includes(value)){
            item.style.display = "flex";
        }else{
            item.style.display = "none";
        }

    });

});


/* ====================================
   ACTIVE NAV ITEM
==================================== */

document.querySelectorAll(".nav-item")
.forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(".nav-item")
        .forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

    });

});


/* ====================================
   TOAST NOTIFICATION
==================================== */

function showToast(message){

    const container =
    document.getElementById("toastContainer");

    const toast =
    document.createElement("div");

    toast.className = "toast";

    toast.innerText = message;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {
            toast.remove();
        }, 300);

    }, 2500);

}


/* ====================================
   DEMO BUTTON ACTIONS
==================================== */

document.querySelectorAll(".tool-card")
.forEach(card => {

    card.addEventListener("click", () => {

        const toolName =
        card.querySelector("h3").innerText;

        showToast(toolName + " opened");

    });

});


/* ====================================
   EXPLORE BUTTON
==================================== */

const exploreBtn =
document.querySelector(".primary-btn");

exploreBtn?.addEventListener("click", () => {

    document
    .querySelector(".tools-grid")
    .scrollIntoView({
        behavior:"smooth"
    });

});


/* ====================================
   VIEW POPULAR BUTTON
==================================== */

const popularBtn =
document.querySelector(".secondary-btn");

popularBtn?.addEventListener("click", () => {

    showToast("Showing popular tools");

});


/* ====================================
   PAGE LOADED
==================================== */

window.addEventListener("load", () => {

    console.log(
        "Free Tools Hub Loaded Successfully"
    );

});


/* ====================================
   TOOL WORKSPACE
==================================== */

const workspace =
document.getElementById("workspaceContent");

const toolTemplates = {

age: `
<h2>🎂 Age Calculator</h2>

<input type="date" id="dob">

<button class="primary-btn"
onclick="calculateAge()">
Calculate Age
</button>

<div id="ageResult"></div>
`,

bmi: `
<h2>⚖️ BMI Calculator</h2>

<input
type="number"
id="weight"
placeholder="Weight (kg)">

<input
type="number"
id="height"
placeholder="Height (cm)">

<button
class="primary-btn"
onclick="calculateBMI()">
Calculate BMI
</button>

<div id="bmiResult"></div>
`,

word: `
<h2>🔤 Word Counter</h2>

<textarea
id="wordText"
rows="8"></textarea>

<button
class="primary-btn"
onclick="countWords()">
Count Words
</button>

<div id="wordResult"></div>
`,

password: `
<h2>🔐 Password Generator</h2>

<input
type="number"
id="passLength"
value="12">

<button
class="primary-btn"
onclick="generatePasswordTool()">
Generate
</button>

<div id="passResult"></div>
`

};

document.querySelectorAll(".nav-item")
.forEach(btn => {

btn.addEventListener("click", () => {

const text =
btn.textContent.trim();

if(text.includes("Age")){

workspace.innerHTML =
toolTemplates.age;

}

else if(text.includes("BMI")){

workspace.innerHTML =
toolTemplates.bmi;

}

else if(text.includes("Word")){

workspace.innerHTML =
toolTemplates.word;

}

else if(text.includes("Password")){

workspace.innerHTML =
toolTemplates.password;

}

});

});

function calculateAge(){

const dob =
document.getElementById("dob").value;

if(!dob) return;

const birth =
new Date(dob);

const today =
new Date();

let age =
today.getFullYear() -
birth.getFullYear();

document.getElementById(
"ageResult"
).innerHTML =
`Age: ${age} years`;

}

function calculateBMI(){

const weight =
parseFloat(
document.getElementById("weight").value
);

const height =
parseFloat(
document.getElementById("height").value
)/100;

if(!weight || !height) return;

const bmi =
weight/(height*height);

document.getElementById(
"bmiResult"
).innerHTML =
`BMI: ${bmi.toFixed(2)}`;

}

function countWords(){

const text =
document.getElementById(
"wordText"
).value.trim();

const count =
text === ""
? 0
: text.split(/\s+/).length;

document.getElementById(
"wordResult"
).innerHTML =
`Words: ${count}`;

}

function generatePasswordTool(){

const length =
parseInt(
document.getElementById(
"passLength"
).value
);

const chars =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%";

let password = "";

for(let i=0;i<length;i++){

password +=
chars.charAt(
Math.floor(
Math.random()*chars.length
)
);

}

document.getElementById(
"passResult"
).innerHTML =
password;

}

