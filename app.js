let menuBtn = document.getElementById("bars");
let crossBtn = document.getElementById("cross");
let nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

crossBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// slots / cart view

const foodSelected = [];
const obj = {};
const imgs = document.querySelectorAll(".pic img");
const prices = document.querySelectorAll(".price");
const titles = document.querySelectorAll(".card-desc h2");
const adds = document.querySelectorAll("#add");
const checked = document.querySelectorAll("#checked");

for (let i = 0; i < checked.length; i++) {
  adds[i].addEventListener("click", (e) => {
    e.target.style.display = "none";
    obj.img = imgs[i];
    obj.price = prices[i];
    obj.title = titles[i];
    foodSelected.push(obj);
    if (foodSelected.length == 0) {
      const h1 = document.createElement("h1");
      h1.setAttribute("id", "no-order");
      h1.innerHTML = "No orders yet !";
      slot.append(h1);
    } else {
      for (let i = 0; i < foodSelected.length; i++) {
        const meal = document.createElement("div");
        meal.setAttribute("class", "meal");
        const mealPrice = document.createElement("p");
        mealPrice.setAttribute("class", "meal-price");
        const mealTitle = document.createElement("h3");
        mealPrice.setAttribute("class", "meal-title");
        const mealImg = document.createElement("div");
        mealPrice.setAttribute("class", "meal-img");
        mealPrice.innerHTML = foodSelected[i].price;
        mealImg.innerHTML = foodSelected[i].img;
        mealTitle.innerHTML = foodSelected[i].title;
        meal.append(mealImg, mealTitle, mealPrice);
        slot.append(meal);
      }
    }
  });
}

for (let i = 0; i < checked.length; i++) {
  checked[i].addEventListener("click", (e) => {
    adds[i].style.display = "initial";
  });
}

const close = document.getElementById("close");
const cart = document.getElementById("cart");
const slot = document.getElementById("slot");

close.addEventListener("click", function () {
  slot.classList.toggle("open");
});

cart.addEventListener("click", function () {
  slot.classList.toggle("open");
});

// =========

console.log(foodSelected);
