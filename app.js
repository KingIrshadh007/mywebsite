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
