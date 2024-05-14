// NAVBAR ---------------------------------------------------------------------------------

let sections = document.querySelectorAll("section");
let navLink = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLink.forEach((links) => {
                links.classList.remove("rounded-full", "bg-black", "text-white");
                links.classList.add("text-black");
                document
                    .querySelector("nav ul li a[href*=" + id + "]")
                    .classList.add("rounded-full", "bg-black", "text-white");
                document
                    .querySelector("nav ul li a[href*=" + id + "]")
                    .classList.remove("text-black");
            });
        }
    });
};

const navLinks = document.querySelector(".nav-links");
function onToggleMenu(e) {
    e.name = e.name === "menu-outline" ? "close-outline" : "menu-outline";
    navLinks.classList.toggle("translate-y-[0]");
}

// HEADER ---------------------------------------------------------------------------------------

let headerItems = document.querySelectorAll(".header-slider .header-item");

let headerCounts = headerItems.length;
let headerActive = 0;

function headerSlide() {
    headerActive = headerActive + 1;
    if (headerActive >= headerCounts) {
        headerActive = 0;
    }

    let headerActiveOld = document.querySelector(".header-slider .header-item.active");
    headerActiveOld.classList.remove("active");

    headerItems[headerActive].classList.add("active");
};

setInterval(headerSlide, 10000);

// Fav. Slider-------------------------------------------------------------------------------------------------

let favItem = document.querySelectorAll(".fav-slider .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let favCount = favItem.length;
let favActive = 0;

next.onclick = function () {
    favActive = favActive + 1;
    if (favActive >= favCount) {
        favActive = 0;
    }
    showSlider();
};

// prev item
prev.onclick = function () {
    favActive = favActive - 1;
    if (favActive < 0) {
        favActive = favCount - 1;
    }
    showSlider();
};

function showSlider() {
    // remove 'active'
    let favActiveOld = document.querySelector(".fav-slider .item.active");
    favActiveOld.classList.remove("active")

    // add active
    favItem[favActive].classList.add("active")
}