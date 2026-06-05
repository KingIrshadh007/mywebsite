// Theme Toggle
const themeBtn = document.getElementById("themeToggle");

if(themeBtn){
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");
    });
}

// Sidebar Toggle
const sidebarBtn = document.getElementById("sidebarToggle");

if(sidebarBtn){
    sidebarBtn.addEventListener("click", () => {
        document.getElementById("sidebar")
        .classList.toggle("collapsed");
    });
}

// Tool Search
const searchInput = document.getElementById("toolSearch");

if(searchInput){

    searchInput.addEventListener("keyup", () => {

        const value =
        searchInput.value.toLowerCase();

        document
        .querySelectorAll(".nav-item")
        .forEach(item => {

            const text =
            item.textContent.toLowerCase();

            item.style.display =
            text.includes(value)
            ? "flex"
            : "none";
        });
    });
}

console.log("Free Tools Hub Loaded");
