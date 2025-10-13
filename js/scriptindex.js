const listGoodBox = document.getElementById("check-list-box");
listGoodBox.style.transform = `translateX(400px)`;
document.getElementById("btn-checklist").addEventListener("click", (e) => {
  if ((listGoodBox.style.transform = `translateX(400px)`)) {
    listGoodBox.style.transform = `translateX(-10px)`;
  } else listGoodBox.style.transform = `translateX(400px)`;
});
document.getElementById("hide-list-good-box").addEventListener("click", (e) => {
  listGoodBox.style.transform = `translateX(400px)`;
});
//fetch data

const Data = [];
const CategoBox = document.getElementById("category-box");
const BtnAdd = [];
let itemsofData;
CategoBox.innerHTML = "";
const listGoodonCheckbox = document.getElementById("list-good");
listGoodonCheckbox.innerHTML = "";
fetch("https://sorngvichet.github.io/TheMoonShoperAPI/TMS-API.json")
  .then((res) => res.json())
  .then((data) => {
    txtNointernet.style.display = "none";
    for (let i = 0; i < data.length; i++) {
      itemsofData = {
        id: i + 1,
        imgs: `${data[i].img}`,
        typeofProduct: `${data[i].typeproduct}`,
        brand: `${data[i].brand}`,
        title: `${data[i].title}`,
        des: `${data[i].describtion}`,
        price: data[i].price,
      };
      Data.push(itemsofData);
      let x;

      if (data[i].title.length >= 20) {
        x = 15;
      } else x = 20;
      CategoBox.innerHTML += `
            <div
                  style="width: 220px; height: 360px"
                  class="card rounded-3 overflow-hidden shadow border-0"
                >
                  <!--image box-->
                  <div style="height: 60%" class="overflow-hidden">
                    <img
                      style="width: 100%"
                      src="${data[i].img}"
                      alt=""
                    />
                  </div>
                  <!--Describtion-->
                  <div
                    style="height: 40%"
                    class="p-2 d-flex flex-column justify-content-between"
                  >
                    <h4  style="height: 21%;font-size:${x}px" >${
        data[i].title
      }</h4>
                    <span style="font-size: 13.5px; height: 27%" class=""
                      >${data[i].describtion},${data[i].first_star}</span
                    >
                    <div style="height: 13%; font-size: 15px" class="text-warning">
                      <i class="bi bi-star-${data[i].first_star}"></i>
                      <i class="bi bi-star-${data[i].second_star}"></i>
                      <i class="bi bi-star-${data[i].third_star}"></i>
                      <i class="bi bi-star-${data[i].fourth_star}"></i>
                      <i class="bi bi-star-${data[i].fifth_star} bi-star${
        data[i].fifth_star
      } "></i>
                    </div>
                    <div
                      style="height: 40%"
                      class="w-100 d-flex flex-row align-items-center justify-content-between"
                    >
                      <span
                        class="border-1 border-end fw-bold border-1 border-black px-3 fs-5"
                        >$ ${data[i].price}</span
                      >
                      <button id="${
                        i + 1
                      }" class="btn btn-primary">ADD NOW</button>
                    </div>
                  </div>
                </div>
            `;
    }

    Data.forEach((items, index) => {
      document.getElementById(`${index + 1}`).addEventListener("click", () => {
        listGoodonCheckbox.innerHTML += ` <div
              style="height: 48px"
              class="d-flex w-100 flex-row shadow gap-2 align-items-center p-1 position-relative"
            >
              <div
                style="height: 35px; width: 35px"
               class="overflow-hidden rounded-5"
              >
                <img
                style="transform: translateY(-20px)"
   
                  class="h-100 shadow "
                  src="${Data[index].imgs}"
                  alt=""
                />
              </div>
              <div
                style="width: fit-content"
               class="h-100 d-flex flex-row align-items-center"
              >
                <div style="width: 70%" class="d-flex flex-column h-100 pb-2">
                  <span class="fs-6">${Data[index].title.slice(0, 15)}</span>
                  <span style="font-size: 12px">Brand : ${
                    Data[index].brand
                  }</span>
                </div>
                <span
                  style="font-size: 20px"
                  class="ms-2 border-start border-1 px-3 border-danger"
                  >$${Data[index].price}</span
                >
                <i
                  style="margin-top: 12px"
                  class="fa-solid text-warning fa-xmark position-absolute top-0 end-0 fs-4 me-1"
                ></i>
              </div>
            </div>`;
      });
    });
  });

//list good on bood check
