// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function() {
    if (true) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// nav hide
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse");
navbar.forEach(function(a) {
    a.addEventListener("click", function() {
        navCollapse.classList.remove("show");
    });
});