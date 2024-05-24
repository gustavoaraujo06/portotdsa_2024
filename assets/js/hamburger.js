hamburgerContainer = document.getElementById("mobile-nav-container")
hamburgerButton = document.getElementById("hamburger-button")
displayMenu = false
hamburgerButton.onclick = function() {
    displayMenu = !displayMenu
    if (displayMenu) {
        hamburgerContainer.style.display = "block"
    }
    else {
        hamburgerContainer.style.display = "none"
    }
}