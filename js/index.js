class Tags {
  constructor(item, cost, input, total, btn) {
    this.item = item;
    this.cost = cost;
    this.input = input;
    this.total = total;
    this.btn = btn;
  }
  insertRow(row, itemName, total) {
    let divContainer = document.createElement("div");
    divContainer.className = "item-container";
    generalDiv.appendChild(divContainer);

    let arr = Object.values(row);

    arr.forEach(function(element, index) {
      if (index === 0) {
        element = document.createElement("div");
        element.className = "div-product inline";
        element.innerHTML = `<span>${itemName}</span>`;
      } else if (index === 1) {
        element = document.createElement("span");
        element.className = "span-product inline";
        element.innerHTML = `<span>$${total}</span>`;
      } else if (index === 2) {
        element = document.createElement("div");
        element.className = "div-label-input inline input";
        element.innerHTML = `<label>QTY</label><input type="number"/>`;
      } else if (index === 3) {
        element = document.createElement("span");
        element.className = "span-total inline";
        element.innerHTML = `$0.00`;
      } else if (index === 4) {
        element = document.createElement("button");
        element.className = "btn-delete btn";
        element.innerHTML = `Delete`;
      }
      divContainer.appendChild(element);
    });
  }
}
const title = document.createElement("h1");
title.innerHTML = `Ironhack <span class="break"></span>Merchandising Shop`;
title.className = "title";
body.prepend(title);

const generalDiv = document.createElement("div");
body.appendChild(generalDiv);

let firstRow = new Tags();
firstRow.insertRow(firstRow, "IronBubble-head", (25).toFixed(2));

let secondRow = new Tags();
secondRow.insertRow(secondRow, "IronShirt", (15).toFixed(2));

let thirRow = new Tags();
thirRow.insertRow(thirRow, "IronCup", (10).toFixed(2));

let fourthRow = new Tags();
fourthRow.insertRow(fourthRow, "IronSticker", (1).toFixed(2));

let fifthRow = new Tags();
fifthRow.insertRow(fifthRow, "IronAxe", (100).toFixed(2));

const newRowContainer = document.createElement("div");
newRowContainer.className = "item-container";
body.appendChild(newRowContainer);

const inputItem = document.createElement("div");
inputItem.innerHTML = `<input id ="input-item" type="text" placeholder="Type New Item"/>`;
newRowContainer.appendChild(inputItem);

const inputCost = document.createElement("div");
inputCost.innerHTML = `<input id="input-cost" type="text" placeholder="Type the cost of the Item"/>`;
newRowContainer.appendChild(inputCost);

const createButton = document.createElement("button");
createButton.innerHTML = `Create Item`;
createButton.id = "new-item-create";
newRowContainer.appendChild(createButton);

const btnSuccess = document.createElement("button");
btnSuccess.innerHTML = `Calculate Prices`;
btnSuccess.id = "calc-prices-button";
btnSuccess.className = "btn-success btn success";
body.appendChild(btnSuccess);

function deleteItem(event) {
  generalDiv.removeChild(event.currentTarget.parentElement);
}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  var inputs = document.querySelectorAll("input");
  var value = "";
  var result = "";

  for (var i = 0; i < inputs.length; i++) {
    if (parseFloat(inputs[i].value) !== 0 && inputs[i].value !== "") {
      var value = inputs[i].parentElement.previousSibling.textContent;
      for (var n = 0; n < value.length; n++) {
        if (value[n] === ".") {
          result = result + value[n];
        } else if (isNaN(value[n])) {
        } else {
          result = result + value[n];
        }
      }
      result = (parseFloat(result) * parseFloat(inputs[i].value)).toFixed(2);
      inputs[i].parentElement.nextSibling.innerHTML = `<span>$${result}</span>`;
    }
  }
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {
  let newRow = new Tags();
  let newItem = document.getElementById("input-item");
  let newCost = document.getElementById("input-cost");

  newRow.insertRow(newRow, newItem.value, parseFloat(newCost.value).toFixed(2));
  calculatePriceButton = document.getElementById("calc-prices-button");
  // calculatePriceButton.addEventListener("click", getTotalPrice);

  createItemButton = document.getElementById("new-item-create");
  deleteButtons = document.getElementsByClassName("btn-delete");
}

// window.onload = function() {
var calculatePriceButton = document.getElementById("calc-prices-button");
// calculatePriceButton.addEventListener("click", getTotalPrice);

var createItemButton = document.getElementById("new-item-create");
var deleteButtons = document.getElementsByClassName("btn-delete");

calculatePriceButton.onclick = getTotalPrice;
createItemButton.onclick = createNewItem;

for (var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].onclick = deleteItem;
}
// };
