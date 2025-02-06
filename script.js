const toggleBtn = document.querySelector(".menu-toggle-btn");

const navMenu = document.querySelector(".navigation-menu");

// Toggla menyn med knappen
toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});

// Function för att switcha mellan mobil och desktop läge på nav-meny och burger-knapp
const setNavMenuMode = (e) => {
  console.log(e);
  // mediaQuery variabeln och dess event har båda .matches som är true eller false beroende på om regeln matchar
  if (e.matches) {
    navMenu.classList.add("hidden");
    toggleBtn.classList.remove("hidden");
  } else {
    navMenu.classList.remove("hidden");
    toggleBtn.classList.add("hidden");
  }
};

// hittade window.matchMedia på mdn, bättre alternativ än att lyssna på resize
// då change event på detta bara fireas när regeln börjar eller slutar matcha
const mediaQuery = window.matchMedia("(max-width: 600px)");

// när jag läste på hittade jag att {passive: true} kan användas om man inte kommer köra event.prefentDetault() för att
// webläsaren ska kunna optimera för ännu bättre prestanda (irrelevant i mitt fall men good practice)
mediaQuery.addEventListener("change", setNavMenuMode, { passive: true });

// Kör en gång direkt när scriptet körs för att utgå från rätt läge
setNavMenuMode(mediaQuery);
