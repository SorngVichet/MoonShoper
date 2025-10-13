const navbarMdBox = document.querySelector(".navbar-md-box");
const searchAndBarBox = document.querySelector(".search-and-bar-box");
const inputTypeSearch = document.querySelector("#input-type-search");

let timeForFetching = 0;
inputTypeSearch.addEventListener("focus", (e) => {
  navbarMdBox.style.display = "none";
  if (window.innerWidth < 992) {
    searchAndBarBox.style.width = "50%";
  } else {
    searchAndBarBox.style.width = "65%";
    navbarMdBox.style.opacity = 0;
  }
});
inputTypeSearch.addEventListener("blur", (e) => {
  if (window.innerWidth < 992) {
    searchAndBarBox.style.width = "50%";
  } else {
    searchAndBarBox.style.width = "33%";
    setTimeout(() => {
      navbarMdBox.style.display = "flex";
    }, 200);
  }
  navbarMdBox.style.opacity = 1;
});
if (window.innerWidth < 992) {
  navbarMdBox.style.display = "none";
} else navbarMdBox.style.display = "flex";
window.addEventListener("resize", () => {
  if (window.innerWidth < 992) {
    navbarMdBox.style.display = "none";
    searchAndBarBox.style.width = "50%";
  } else {
    searchAndBarBox.style.width = "33%";
    navbarMdBox.style.display = "flex";
  }
});
//go to category
