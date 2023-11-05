const menuLink = document.querySelector("#menuLink");
const aboutLink = document.querySelector("#aboutLink");
const locationLink = document.querySelector("#locationLink");

menuLink.addEventListener("click", () => {
  const target = document.querySelector("#menu");
  target.scrollIntoView({ behavior: "smooth" });
});
aboutLink.addEventListener("click", () => {
  const target = document.querySelector("#about");
  target.scrollIntoView({ behavior: "smooth" });
});
locationLink.addEventListener("click", () => {
  const target = document.querySelector("#location");
  target.scrollIntoView({ behavior: "smooth" });
});
