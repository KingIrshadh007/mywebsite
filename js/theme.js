// ===== DARK MODE FOR ALL TOOL PAGES =====

document.addEventListener("DOMContentLoaded", () => {

    // Create toggle button automatically
    if (!document.getElementById("themeToggle")) {

        const btn = document.createElement("button");

        btn.id = "themeToggle";
        btn.innerHTML = "🌙";

        btn.style.position = "fixed";
        btn.style.bottom = "20px";
        btn.style.right = "20px";
        btn.style.width = "55px";
        btn.style.height = "55px";
        btn.style.border = "none";
        btn.style.borderRadius = "50%";
        btn.style.cursor = "pointer";
        btn.style.fontSize = "22px";
        btn.style.zIndex = "9999";
        btn.style.background = "#2563eb";
        btn.style.color = "#fff";
        btn.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

        document.body.appendChild(btn);
    }

    const themeToggle = document.getElementById("themeToggle");

    // Load saved theme
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light");
        themeToggle.innerHTML = "☀️";
    }

    // Toggle theme
    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            localStorage.setItem("theme", "light");
            themeToggle.innerHTML = "☀️";
        } else {
            localStorage.setItem("theme", "dark");
            themeToggle.innerHTML = "🌙";
        }

    });

});
