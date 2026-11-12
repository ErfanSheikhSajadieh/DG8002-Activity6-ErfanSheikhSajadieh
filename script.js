// DG8002 Activity 8 | TAG-Me Interactive Edition
const themeButton = document.querySelector("#theme-toggle");
const themeKey = "tagme-light-theme";

function setTheme(light) {
    document.body.classList.toggle("light-theme", light);
    themeButton.setAttribute("aria-pressed", String(light));
}

let savedLightTheme = false;
try {
    savedLightTheme = localStorage.getItem(themeKey) === "true";
} catch {
    // Theme switching still works when browser storage is unavailable.
}

setTheme(savedLightTheme);
themeButton.hidden = false;

themeButton.addEventListener("click", () => {
    const light = !document.body.classList.contains("light-theme");
    setTheme(light);

    try {
        localStorage.setItem(themeKey, String(light));
    } catch {
        // The current page already reflects the chosen theme.
    }
});

const visitorTools = document.getElementById("visitor-tools");

if (visitorTools) {
    const greetingForm = document.getElementById("greeting-form");
    const nameInput = document.getElementById("visitor-name");
    const greetingResult = document.getElementById("greeting-result");
    const factButton = document.getElementById("fact-button");
    const factResult = document.getElementById("fact-result");

    greetingForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = nameInput.value.trim();

        if (!name) {
            nameInput.setAttribute("aria-invalid", "true");
            greetingResult.textContent = "Enter your name to sign the guestbook.";
            nameInput.focus();
            return;
        }

        nameInput.removeAttribute("aria-invalid");
        greetingResult.textContent = `Welcome, ${name}! The Forgotten Worlds are open to you.`;
    });

    nameInput.addEventListener("input", () => {
        if (nameInput.hasAttribute("aria-invalid") && nameInput.value.trim()) {
            nameInput.removeAttribute("aria-invalid");
            greetingResult.textContent = "";
        }
    });

    const facts = [
        "I grew up in Isfahan, Iran.",
        "I moved to Toronto in 2022.",
        "I studied video game design and animation before starting my Master of Digital Media.",
        "Leo, my dog, inspired the guardian you meet in this story.",
        "I took inspiration from Iranian architecture when designing the Forgotten Worlds."
    ];
    let lastFactIndex = -1;

    factButton.addEventListener("click", () => {
        // When a fact is already showing, draw from the other facts.
        const availableFacts = lastFactIndex === -1 ? facts.length : facts.length - 1;
        let index = Math.floor(Math.random() * availableFacts);
        if (lastFactIndex !== -1 && index >= lastFactIndex) index++;

        factResult.textContent = facts[index];
        lastFactIndex = index;
    });

    visitorTools.hidden = false;
}
