async function delay(period) {
  return new Promise((res) => {
    setTimeout(() => {}, period);
  });
}

const navbarMdBox = document.querySelector(".navbar-md-box");
const searchAndBarBox = document.querySelector(".search-and-bar-box");
const inputTypeSearch = document.querySelector("#input-type-search");

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
//Category control
const CategoBox = document.getElementById("category-box");
CategoBox.innerHTML = "";
for (let i = 0; i < 50; i++) {
  CategoBox.innerHTML += `
  <div
        style="width: 220px; height: 360px"
        class="card rounded-3 overflow-hidden shadow border-0"
      >
        <!--image box-->
        <div style="height: 60%" class="overflow-hidden">
          <img
            style="width: 100%"
            src="../img/imgforcart/smiley-man-posing-grey-wall_23-2148448892.jpg"
            alt=""
          />
        </div>
        <!--Describtion-->
        <div
          style="height: 40%"
          class="p-2 d-flex flex-column justify-content-between"
        >
          <h4 style="height: 13%" class="">Fashion Style</h4>
          <span style="font-size: 13.5px; height: 34%" class=""
            >Lorem ipsum dolor sit amet consectetur adipisicing eaque?</span
          >
          <div style="height: 13%; font-size: 15px" class="text-warning">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-half"></i>
            <i class="bi bi-star"></i>
          </div>
          <div
            style="height: 40%"
            class="w-100 d-flex flex-row align-items-center justify-content-between"
          >
            <span
              class="border-1 border-end fw-bold border-1 border-black px-4 fs-5"
              >$ 45</span
            >
            <button class="btn btn-primary">ADD NOW</button>
          </div>
        </div>
      </div>
  `;
}
