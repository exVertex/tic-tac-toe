// Menu 
const menuToggle = document.getElementById("toggle-menu");
const mainContainer = document.getElementById("main-container");

menuToggle?.addEventListener('click', () => {
    mainContainer?.classList.toggle("in-active");
});