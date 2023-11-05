const header = document.querySelector("#header");
const menuBtn = document.querySelector(".nav-menu__btn");
const menu = document.querySelector(".nav-menu");
menuBtn.addEventListener("click", (el) => {
    header.classList.toggle("inview");
});
menu.addEventListener("click", (el) => {
    header.classList.toggle("inview");
});
