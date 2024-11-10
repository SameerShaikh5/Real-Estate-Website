let forSale = document.querySelector("#For-Sale");
let forRent = document.querySelector("#For-Rent");
let allUnits = document.querySelector("#All-Units");
let propertyunit = document.querySelector("#property-unit");
let toggleBar = document.querySelector(".toggle-bar");

toggleBar.addEventListener("click", () => {
  document.querySelector(".nav-list").classList.toggle("nav-list-inactive");
  document.querySelector(".nav").classList.toggle("nav-active");
  document.querySelector(".navbar").classList.toggle("navbar-active");
  document.querySelector(".nav-logobox").classList.toggle("logo-box-active");
  document.querySelector(".nav-list").classList.toggle("nav-list-active");
  
  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle("nav-item-active");
  });
});

allUnits.addEventListener("click", () => {
  propertyunit.value = "";
  allUnits.classList.add("unit-active");
  forSale.classList.remove("unit-active");
  forRent.classList.remove("unit-active");
});

forSale.addEventListener("click", () => {
  propertyunit.value = "For Sale";
  forSale.classList.add("unit-active");
  allUnits.classList.remove("unit-active");
  forRent.classList.remove("unit-active");
});

forRent.addEventListener("click", () => {
  propertyunit.value = "For Rent";
  forRent.classList.add("unit-active");
  forSale.classList.remove("unit-active");
  allUnits.classList.remove("unit-active");
});

