const navbarMdBox = document.querySelector(".navbar-md-box");
const searchAndBarBox = document.querySelector(".search-and-bar-box");
const inputTypeSearch = document.querySelector("#input-type-search");
inputTypeSearch.addEventListener("focus", (e) => {
  searchAndBarBox.style.width = "50%";

  navbarMdBox.style.opacity = 0;
});
inputTypeSearch.addEventListener("blur", (e) => {
  searchAndBarBox.style.width = "33%";
  navbarMdBox.style.opacity = 1;
});
