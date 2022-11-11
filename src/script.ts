// Menu 
const menuToggle = document.getElementById("toggle-menu");
const mainContainer = document.getElementById("main-container");

menuToggle?.addEventListener('click', () => {
    mainContainer?.classList.toggle("in-active");
});

function notImplemented(): void {
    alert("This feature is not yet implemented. Plaese come back later.");
}
