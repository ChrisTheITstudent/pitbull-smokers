const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const navMenu = document.getElementById("navLinks");
let image = 1;

// Event listeners
menuOpen.addEventListener("click", function() {addMenuIndex(1)});
menuClose.addEventListener("click", function() {addMenuIndex(-1)});
menuOpen.addEventListener("click", showNavMenu);
menuClose.addEventListener("click", hideNavMenu);

// Defining functions
function setMenuIcon(iconNumber) {
    let menus = document.getElementsByClassName("hamburger-image");
    if (iconNumber > menus.length) {
        icon = 1
    }
    if (iconNumber < 1) {
        icon = 1
    }
    for (i = 0; i < menus.length; i++) {
        menus[i].style.display = "none";
    }
    menus[iconNumber-1].style.display = "flex";
};
function currentMenuIconIndex(n) {
    setMenuIcon(image = n);
};

function addMenuIndex(n) {
    setMenuIcon(image += n);
};
function hideNavMenu() {
    setTimeout(stopDisplay, 1000);
    navMenu.style.animationName = "hamburger";
    navMenu.style.animationDuration = "2s";
    navMenu.style.animationIterationCount = "1";
    navMenu.style.animationDirection = "reverse";
    navMenu.style.animationFillMode = "forwards";
    navMenu.style.animationTimingFunction = "linear";
};
function stopDisplay() {
    navMenu.style.display = "none";
}
function showNavMenu() {
    navMenu.style.display = "flex";
    navMenu.style.animationName = "nav";
    navMenu.style.animationDuration = "2s";
    navMenu.style.animationIterationCount = "1";
    navMenu.style.animationDirection = "normal";
    navMenu.style.animationFillMode = "forwards";
    navMenu.style.animationTimingFunction = "linear";
}

// Function for hanburger menu
setMenuIcon(image);