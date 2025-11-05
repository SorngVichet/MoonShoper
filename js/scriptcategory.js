//General
const ListCheckBox = document.getElementById("check-list-box");
ListCheckBox.style.transform = `translate(400px)`;
const btnchecklist = document.getElementById("btn-checklist");
btnchecklist.style.transform = `translateX(400px)`;
btnchecklist.style.transition = `0.5s all ease`;
btnchecklist.addEventListener("click", () => {
  ListCheckBox.style.transform = `translateX(0px)`;
});
document.getElementById("hide-list-good-box").addEventListener("click", () => {
  ListCheckBox.style.transform = `translateX(400px)`;
});
//no internet sign
const nointerSign = document.getElementById("nointernet");
nointerSign.style.display = "flex";
nointerSign.innerHTML = "No Inernet Connection";
let x = 0;
setInterval(() => {
  x++;
  nointerSign.innerHTML += ".";
  if (x > 4) {
    nointerSign.innerHTML = "No Inernet Connection";
    x = 0;
  }
}, 200);
//payment
const paymentdialog = document.getElementById("paymentdialog");
const footerpayments = document.getElementById("footerpayment");
footerpayments.style.transition = `0.5s all ease`;
paymentdialog.style.transition = `0.5s all ease`;
footerpayments.style.transform = `translateX(-3000px)`;
paymentdialog.style.transform = `translateY(-2000px)`;

//
const chosenproductlist = document.getElementById("chosenproductlist");
const inputinfotopay = document.getElementById("inputinformationtopay");
const btngotoinputinfotopay = document.getElementById(
  "gotoinputinfortiontopay"
);
const btnbackfrominputinfotopay = document.getElementById(
  "backfrominputinformationtopay"
);
chosenproductlist.style.display = "block";
// Fetch data
fetch("https://sorngvichet.github.io/TheMoonShoperAPI/TMS-API.json")
  .then((res) => res.json())
  .then((data) => {
    //close non internet sign
    nointerSign.style.display = "none";
    // display cart
    const CartContainer = document.getElementById("category-box");
    CartContainer.innerHTML = "";

    let x;
    data.forEach((itm, index) => {
      if (itm.title.length >= 20) {
        x = 12;
      } else x = 17;
      let cart = `
        <div
        id="cart"
        style="width: 191px; height: 320px;"
        class="card rounded-3 overflow-hidden shadow border-0"
      >
        <!--image box-->
        <div style="height: 58%" class="overflow-hidden">
          <img
            style="width: 100%"
            src="${itm.img}"
            alt=""
          />
        </div>
        <!--Describtion-->
        <div
          style="height: 42%"
          class="p-2 d-flex flex-column justify-content-between"
        >
          <h4 style="height: 21%; font-size: ${x}px">${itm.title}</h4>
          <span style="font-size: 13.5px; height: 27%" class=""
            >${itm.describtion}</span
          >
          <div style="height: 13%; font-size: 13px" class="text-warning mt-1">
                      <i class="bi bi-star-${itm.first_star}"></i>
                      <i class="bi bi-star-${itm.second_star}"></i>
                      <i class="bi bi-star-${itm.third_star}"></i>
                      <i class="bi bi-star-${itm.fourth_star}"></i>
                      <i class="bi bi-star-${itm.fifth_star} bi-star"></i>
                    </div>
          <div
            style="height: 40%"
            class="w-100 d-flex flex-row align-items-center justify-content-between"
          >
            <span
              class="border-1 border-end fw-bold border-1 border-black px-3 fs-6"
              >$ ${itm.price}</span
            >
            <button
              id="cart-${index}"
              style="font-size:13px"
              class="btn btn-primary "
            >
              ADD NOW
            </button>
          </div>
        </div>
      </div>
       `;
      CartContainer.innerHTML += cart;
    });
    //ចាប់btn-add-cart
    const BtnAddCart = [];
    const numOfaddedItemsBox = document.getElementById("numOfaddedItems");
    const cartAddedContainer = document.getElementById("list-good");

    let cartAddedData = new Array();
    let y;
    let delededitemsindex = new Array();
    let numofitems = 0;
    let count = 0;
    let condtionindisplaycartpage;
    let getItemscheckout = new Array();
    let bol;
    for (let i = 0; i < data.length; i++) {
      BtnAddCart.push(document.getElementById(`cart-${i}`));
    }
    //add cart into box check and catch btn each added cart

    // controll chosen items
    BtnAddCart.forEach((itm, index) => {
      itm.addEventListener("click", () => {
        btnchecklist.style.transform = `translateX(0px)`;
        ListCheckBox.style.transform = `translateX(0px)`;
        let obj = {
          img: `${data[index].img}`,
          title: `${data[index].title}`,
          brand: `${data[index].brand}`,
          price: `${data[index].price}`,
          num: 1,
          index: count,
        };
        if (delededitemsindex.length <= 0) {
          if (cartAddedData.length <= 0) {
            cartAddedData.push(obj);
            getItemscheckout.push(obj);
            count += 1;
          } else {
            bol = true;
            for (let i = 0; i < getItemscheckout.length; i++) {
              if (
                JSON.stringify(obj).slice(0, 100) ===
                JSON.stringify(getItemscheckout[i]).slice(0, 100)
              ) {
                bol = false;
              }
            }
            if (bol === true) {
              getItemscheckout.reverse();
              cartAddedData.push(obj);
              getItemscheckout.push(obj);

              count += 1;
            }
          }
        } else {
          getItemscheckout = new Array();

          bol = true;
          cartAddedData.forEach((itm, ind) => {
            for (let i = 0; i < delededitemsindex.length; i++) {
              if (itm.index === delededitemsindex[i]) {
                bol = false;
              }
            }
            if (bol === true) {
              getItemscheckout.push(itm);
            }
            bol = true;
          });
          console.log(getItemscheckout);
          bol = true;
          for (let i = 0; i < getItemscheckout.length; i++) {
            if (
              JSON.stringify(obj).slice(0, 100) ===
              JSON.stringify(getItemscheckout[i]).slice(0, 100)
            ) {
              bol = false;
            }
          }
          if (bol === true) {
            cartAddedData.push(obj);
            getItemscheckout.push(obj);
            count += 1;
          }
        }

        cartAddedContainer.innerHTML = "";
        numofitems = 0;
        // console.log(getItemscheckout);
        // console.log(count);
        // console.log(cartAddedData);

        getItemscheckout.reverse();
        getItemscheckout.forEach((itm, ind) => {
          numofitems += 1;

          numOfaddedItemsBox.innerHTML = `added items: ${numofitems}`;
          if (itm.title.length >= 23) {
            y = 10;
          } else if (itm.title.length <= 20 && itm.title.length >= 18) {
            y = 11;
          } else y = 15;

          cartAddedContainer.innerHTML += `
                       <div
                  id="cart${itm.index}"
                   style="height: 48px;display: flex;"
      
                   class=" w-100 flex-row shadow gap-2 align-items-center p-1 position-relative"
                 >
                   <div
                     style="height: 35px; width: 35px"
                     class="overflow-hidden d-flex justify-content-center rounded-5 shadow"
                   >
                     <img
                       class="object-fit-cover h-100 w-100"
                       src="${itm.img}"
                       alt=""
                     />
                   </div>
                   <div
                     style="width: 275px"
                     class="h-100 d-flex flex-row pe-4 justify-content-around align-items-center"
                   >
                     <div style="width: 80%" class="d-flex flex-column h-100 pb-2">
                       <span class=" fw-bold" style="font-size:${y}px" >${itm.title}</span>
                       <span style="font-size: 12px">Brand : ${itm.brand} </span>
                     </div>
                     <span
                       style="font-size: 20px; width: 100px"
                       class="ms-3 border-start border-1 d-flex flex-row justify-content-center border-danger"
                     >
                       $${itm.price}</span
                     >
                     <i 
                       id="cartAdded-${itm.index}"
                       style="margin-top: 12px;cursor:pointer"
                       class="fa-solid text-warning fa-xmark cart-${itm.index} position-absolute top-0 end-0 fs-4 me-1"
                     ></i>
                   </div>
                 </div>
                      `;
        });

        // concel a cart
        //  getItemscheckout = [];
        //   for (let i = 0; i < cartAddedData.length; i++) {
        //     for (let j = 0; j < delededitemsindex.length; j++) {
        //       if (i === delededitemsindex[j]) {
        //         bol = false;
        //       } else bol = true;
        //     }
        //     if (bol === true) {
        //       getItemscheckout.push(cartAddedData[i]);
        //     }
        //   }
        getItemscheckout.forEach((itm, index) => {
          document
            .getElementById(`cartAdded-${itm.index}`)
            .addEventListener("click", () => {
              numofitems -= 1;
              // console.log(itm.index);
              delededitemsindex.push(itm.index);
              // console.log(delededitemsindex);
              document.getElementById(`cart${itm.index}`).style.display =
                "none";

              if (numofitems === 0) {
                cartAddedData = [];
                getItemscheckout = [];
                delededitemsindex = [];
                count = 0;
                cartAddedContainer.innerHTML = "";
                btnchecklist.style.transform = `translateX(400px)`;
                ListCheckBox.style.transform = `translateX(400px)`;
                tran();
              }
              numOfaddedItemsBox.innerHTML = `added items: ${numofitems}`;
            });
        });
      });
    });
    let plus = [];
    let minus = [];
    document.getElementById("btn-concel").addEventListener("click", () => {
      cartAddedData = [];
      getItemscheckout = [];
      delededitemsindex = [];
      numofitems = 0;
      count = 0;

      cartAddedContainer.innerHTML = "";
      btnchecklist.style.transform = `translateX(400px)`;
      ListCheckBox.style.transform = `translateX(400px)`;
    });

    // payment display constrol
    // pay summary
    const NumofItemsContain = document.getElementById("numofitmes");
    let NumofItems = 0;
    NumofItemsContain.innerHTML = NumofItems;
    const PriceofAllContain = document.getElementById("priceofall");
    let PriceofAll = 0;
    PriceofAllContain.innerHTML = `$ ${PriceofAll}`;
    const DeliveryContain = document.getElementById("delivery");
    let Delivery = 0;
    DeliveryContain.innerHTML = `$ ${Delivery}`;
    const TotalPriceContain = document.getElementById("totalprice");
    let TotalPrice = 0;
    DeliveryContain.innerHTML = `$ ${Delivery}`;

    document.getElementById("btn-addtocart").addEventListener("click", () => {
      footerpayments.style.transform = `translateX(0px)`;
      paymentdialog.style.transform = `translateY(0px)`;
      ListCheckBox.style.transform = `translate(400px)`;
      getItemscheckout = new Array();

      bol = true;
      cartAddedData.forEach((itm, ind) => {
        for (let i = 0; i < delededitemsindex.length; i++) {
          if (itm.index === delededitemsindex[i]) {
            bol = false;
          }
        }
        if (bol === true) {
          getItemscheckout.push(itm);
        }
        bol = true;
      });
      const listcheckout = document.getElementById("cartcheckoutcontainer");
      listcheckout.innerHTML = "";

      getItemscheckout.forEach((itm, index) => {
        itm.num = 1;
        listcheckout.innerHTML += `
       <div
              id="Cart"
              style="height: 50px"
              class="w-100 d-flex flex-row align-items-center ps-5 gap-2 shadow"
            >
              <span
                style="width: 5%; height: 60%"
                class="h6 border-end border-1 border-black mt-2 d-flex align-items-center"
                >${index + 1}</span
              >
              <img
                style="height: 33px; width: 33px"
                class="rounded-5"
                src="${itm.img}"
                alt=""
              />
              <div style="width: 82%; height: 100%" class="d-flex flex-row">
                <div class="h-100 w-75 d-flex flex-column">
                  <span style="font-size: 16px" class=""
                    >${itm.title}</span
                  >
                  <span style="font-size: 12px">Brand : ${itm.brand}</span>
                </div>

                <div class="h-100 w-25 d-flex flex-column align-items-center">
                  <span
                    class="border-bottom fs-6 text-danger border-1 w-100 align-items-center d-flex justify-content-center"
                    >$ ${itm.price}</span
                  >
                  <div
                    class="w-100 d-flex flex-row align-content-around justify-content-center gap-2"
                  >
                    <i
                      id="-${index}"

                      style="transform: rotateZ(90deg); color: gray;cursor:pointer"
                      class="fa-solid fa-caret-down"
                    ></i>
                    <span
                    id="numofitm${index}"
                    >${itm.num}</span>
                    <i
                    id="+${index}"
                      style="transform: rotateZ(-90deg); color: gray;cursor:pointer"
                      class="fa-solid fa-caret-down"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          `;
      });
      NumofItems = 0;
      PriceofAll = 0;

      getItemscheckout.forEach((itm) => {
        NumofItems += itm.num;
        PriceofAll += itm.price * itm.num;
      });
      if (PriceofAll >= 200) {
        Delivery = 0;
        DeliveryContain.innerHTML = `<span style="font-size:12px" >(Free delivery for spanding more than 200 $)</span> $ ${Delivery}`;
      } else {
        Delivery = 2;
        DeliveryContain.innerHTML = `$ ${Delivery}`;
      }
      TotalPrice = Delivery + PriceofAll;

      PriceofAllContain.innerHTML = `$ ${PriceofAll.toFixed(2)}`;
      NumofItemsContain.innerHTML = NumofItems;
      TotalPriceContain.innerHTML = `$ ${TotalPrice.toFixed(2)}`;
      getItemscheckout.forEach((itm, ind) => {
        document.getElementById(`+${ind}`).addEventListener("click", () => {
          itm.num += 1;
          document.getElementById(`numofitm${ind}`).innerHTML = itm.num;
          NumofItems = 0;
          PriceofAll = 0;

          getItemscheckout.forEach((itm) => {
            NumofItems += itm.num;
            PriceofAll += itm.price * itm.num;
          });
          if (PriceofAll >= 200) {
            Delivery = 0;
            DeliveryContain.innerHTML = `<span style="font-size:12px" >(Free delivery for spanding more than 200 $)</span> $ ${Delivery}`;
          } else {
            Delivery = 2;
            DeliveryContain.innerHTML = `$ ${Delivery}`;
          }
          TotalPrice = Delivery + PriceofAll;

          PriceofAllContain.innerHTML = `$ ${PriceofAll.toFixed(2)}`;
          NumofItemsContain.innerHTML = NumofItems;
          TotalPriceContain.innerHTML = `$ ${TotalPrice.toFixed(2)}`;
        });
        document.getElementById(`-${ind}`).addEventListener("click", () => {
          itm.num -= 1;
          if (itm.num < 0) {
            itm.num = 0;
          }
          document.getElementById(`numofitm${ind}`).innerHTML = itm.num;
          NumofItems = 0;
          PriceofAll = 0;
          Delivery = 2;
          getItemscheckout.forEach((itm) => {
            NumofItems += itm.num;
            PriceofAll += itm.price * itm.num;
          });
          if (PriceofAll >= 200) {
            Delivery = 0;
            DeliveryContain.innerHTML = `<span style="font-size:12px" >(Free delivery for spanding more than 200 $)</span> $ ${Delivery}`;
          } else {
            Delivery = 2;
            DeliveryContain.innerHTML = `$ ${Delivery}`;
          }
          TotalPrice = Delivery + PriceofAll;

          PriceofAllContain.innerHTML = `$ ${PriceofAll.toFixed(2)}`;
          NumofItemsContain.innerHTML = NumofItems;
          TotalPriceContain.innerHTML = `$ ${TotalPrice.toFixed(2)}`;
          if (NumofItems === 0) {
            cartAddedData = new Array();
            getItemscheckout = new Array();
            delededitemsindex = new Array();
            count = 0;
            cartAddedContainer.innerHTML = "";
            btnchecklist.style.transform = `translateX(400px)`;
            ListCheckBox.style.transform = `translateX(400px)`;
            paymentdialog.style.transform = `translateY(-2000px)`;
            footerpayments.style.transform = `translateX(-3000px)`;
          }
        });
      });
    });
    document
      .getElementById("hidepaymentdialog")
      .addEventListener("click", () => {
        TotalPrice = 0;
        footerpayments.style.transform = `translateX(-3000px)`;
        paymentdialog.style.transform = `translateY(-2000px)`;
      });
    document
      .getElementById("hidepaymentdialoginaddmore")
      .addEventListener("click", () => {
        TotalPrice = 0;
        chosenproductlist.style.display = "block";
        inputinfotopay.style.display = "none";
        footerpayments.style.transform = `translateX(-3000px)`;
        paymentdialog.style.transform = `translateY(-2000px)`;
      });
    document.getElementById("resetpayment").addEventListener("click", () => {
      cartAddedData = new Array();
      getItemscheckout = new Array();
      delededitemsindex = new Array();
      count = 0;
      chosenproductlist.style.display = "block";
      inputinfotopay.style.display = "none";
      cartAddedContainer.innerHTML = "";
      btnchecklist.style.transform = `translateX(400px)`;
      ListCheckBox.style.transform = `translateX(400px)`;
      paymentdialog.style.transform = `translateY(-2000px)`;
      footerpayments.style.transform = `translateX(-3000px)`;
    });
    if (window.innerWidth <= 991) {
      btngotoinputinfotopay.addEventListener("click", () => {
        chosenproductlist.style.display = "none";
        inputinfotopay.style.display = "flex";
      });
      btnbackfrominputinfotopay.addEventListener("click", () => {
        chosenproductlist.style.display = "block";
        inputinfotopay.style.display = "none";
      });
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 991) {
        chosenproductlist.style.display = "block";
        inputinfotopay.style.display = "flex";
      }
    });
  });
