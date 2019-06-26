function createBody() {
  // Declaración variables de la primera row de items

  const body = document.querySelector("#body");
  const divContainer = document.createElement("div");
  const divProduct = document.createElement("div");
  const spanProductName = document.createElement("span");
  const divUnitCost = document.createElement("div");
  const spanUnitCost = document.createElement("span");
  const divLabelInput = document.createElement("div");
  const labelQTY = document.createElement("label");
  const inputQTY = document.createElement("input");
  const divTotal = document.createElement("div");
  const spanTotal = document.createElement("span");
  const divDelete = document.createElement("div");
  const btnDelete = document.createElement("button");
  const btnSuccess = document.createElement("button");
  const title = document.createElement("h1");
  const spanBreakLine = document.createElement("span");

  // Declaración variables de la segunda row de items

  const divSecondItem = document.createElement("div");
  const divSecondCost = document.createElement("div");
  const divSecondLabelInput = document.createElement("div");
  const divSecondTotal = document.createElement("div");
  const spanSecondTotal = document.createElement("span");
  const divSecondDelete = document.createElement("div");
  const btnSecondDelete = document.createElement("button");

  // Declaración variables de la tercera row de items

  const divThirdItem = document.createElement("div");
  const divThirdCost = document.createElement("div");
  const divThirdLabelInput = document.createElement("div");
  const divThirdTotal = document.createElement("div");
  const spanThirdTotal = document.createElement("span");
  const divThirdDelete = document.createElement("div");
  const btnThirdDelete = document.createElement("button");

  // Declaración variables de la cuarta row de items

  const divFourthItem = document.createElement("div");
  const divFourthCost = document.createElement("div");
  const divFourthLabelInput = document.createElement("div");
  const divFourthTotal = document.createElement("div");
  const spanFourthTotal = document.createElement("span");
  const divFourthDelete = document.createElement("div");
  const btnFourthDelete = document.createElement("button");

  // Declaración variables de la quinta row de items

  const divFifthItem = document.createElement("div");
  const divFifthCost = document.createElement("div");
  const divFifthLabelInput = document.createElement("div");
  const divFifthTotal = document.createElement("div");
  const spanFifthTotal = document.createElement("span");
  const divFifthDelete = document.createElement("div");
  const btnFifthDelete = document.createElement("button");

  // HTML de la primera row de items

  title.innerHTML = `
  Ironhack <span class="break"></span>Merchandising Shop
  `;

  divProduct.innerHTML = `
  <span>IronBubble-head</span>
  `;

  divUnitCost.innerHTML = `
  <span>$25.00</span>
  `;

  divLabelInput.innerHTML = `
  <label>QTY</label>
  <input type="number"/>
  `;

  spanTotal.innerText = `
  $0.00
  `;

  btnDelete.innerHTML = `
  Delete
  `;

  btnSuccess.innerHTML = `
  Calculate Prices
  `;

  // HTML de la segunda row de items

  divSecondItem.innerHTML = `
  <span>IronShirt</span>
  `;

  divSecondCost.innerHTML = `
  <span>$15.00</span>
  `;

  divSecondLabelInput.innerHTML = `
  <label>QTY</label>
  <input type="number"/>
  `;

  spanSecondTotal.innerText = `
  $0.00
  `;

  btnSecondDelete.innerHTML = `
  Delete
  `;

  // HTML de la tercera row de items

  divThirdItem.innerHTML = `
  <span>IronCup</span>
  `;

  divThirdCost.innerHTML = `
  <span>$10.00</span>
  `;

  divThirdLabelInput.innerHTML = `
  <label>QTY</label>
  <input type="number"/>
  `;

  spanThirdTotal.innerText = `
  $0.00
  `;

  btnThirdDelete.innerHTML = `
  Delete
  `;

  // HTML de la cuarta row de items

  divFourthItem.innerHTML = `
  <span>IronSticker</span>
  `;

  divFourthCost.innerHTML = `
  <span>$1.00</span>
  `;

  divFourthLabelInput.innerHTML = `
  <label>QTY</label>
  <input type="number"/>
  `;

  spanFourthTotal.innerText = `
  $0.00
  `;

  btnFourthDelete.innerHTML = `
  Delete
  `;

  // HTML de la quinta row de items

  divFifthItem.innerHTML = `
  <span>IronAxe</span>
  `;

  divFifthCost.innerHTML = `
  <span>$100.00</span>
  `;

  divFifthLabelInput.innerHTML = `
  <label>QTY</label>
  <input type="number"/>
  `;

  spanFifthTotal.innerText = `
  $0.00
  `;

  btnFifthDelete.innerHTML = `
  Delete
  `;

  //clases de la primera row de items

  divContainer.className = "container";
  divProduct.className = "div-product inline";
  spanProductName.className = "span-product";
  divUnitCost.className = "div-unit-cost inline";
  spanUnitCost.className = "span-unit-cost";
  divLabelInput.className = "div-label-input inline input";
  labelQTY.className = "label-QTY";
  inputQTY.className = "input-QTY";
  divTotal.className = "div-total inline";
  spanTotal.className = "span.total";
  divDelete.className = "div-delete inline";
  btnDelete.className = "btn-delete btn";
  btnSuccess.className = "btn-success btn success";
  title.className = "title";
  spanBreakLine.className = "break";

  //clases de la segunda row de items

  divSecondItem.className = "div-product inline";
  divSecondCost.className = "div-unit-cost inline";
  divSecondLabelInput.className = "div-label-input inline input";
  divSecondTotal.className = "div-total inline";
  spanSecondTotal.className = "span-total";
  divSecondDelete.className = "div-delete inline";
  btnSecondDelete.className = "btn-delete btn";

  //clases de la tercera row de items

  divThirdItem.className = "div-product inline";
  divThirdCost.className = "div-unit-cost inline";
  divThirdLabelInput.className = "div-label-input inline input";
  divThirdTotal.className = "div-total inline";
  spanThirdTotal.className = "span-total";
  divThirdDelete.className = "div-delete inline";
  btnThirdDelete.className = "btn-delete btn";

  //clases de la cuarta row de items

  divFourthItem.className = "div-product inline";
  divFourthCost.className = "div-unit-cost inline";
  divFourthLabelInput.className = "div-label-input inline input";
  divFourthTotal.className = "div-total inline";
  spanFourthTotal.className = "span-total";
  divFourthDelete.className = "div-delete inline";
  btnFourthDelete.className = "btn-delete btn";

  //clases de la quinta row de items

  divFifthItem.className = "div-product inline";
  divFifthCost.className = "div-unit-cost inline";
  divFifthLabelInput.className = "div-label-input inline input";
  divFifthTotal.className = "div-total inline";
  spanFifthTotal.className = "span-total";
  divFifthDelete.className = "div-delete inline";
  btnFifthDelete.className = "btn-delete btn";

  //insterta en la página primera row de items, titulo y boton calculate

  body.prepend(divContainer);
  divContainer.prepend(
    title,
    divProduct,
    divUnitCost,
    divLabelInput,
    divTotal,
    divDelete
  );
  divTotal.appendChild(spanTotal);
  divDelete.appendChild(btnDelete);
  divContainer.appendChild(btnSuccess);

  // inserta en la página segunda row de items

  // divContainer.insertBefore(spanBreakLine, btnSuccess);
  divContainer.insertBefore(divSecondItem, btnSuccess);
  divContainer.insertBefore(divSecondCost, btnSuccess);
  divContainer.insertBefore(divSecondLabelInput, btnSuccess);
  divContainer.insertBefore(divSecondTotal, btnSuccess);
  divContainer.insertBefore(divSecondTotal, btnSuccess);
  divContainer.insertBefore(divSecondDelete, btnSuccess);
  divSecondTotal.appendChild(spanSecondTotal);
  divSecondDelete.appendChild(btnSecondDelete);

  // inserta en la página tercera row de items

  // divContainer.insertBefore(spanBreakLine, btnSuccess);
  divContainer.insertBefore(divThirdItem, btnSuccess);
  divContainer.insertBefore(divThirdCost, btnSuccess);
  divContainer.insertBefore(divThirdLabelInput, btnSuccess);
  divContainer.insertBefore(divThirdTotal, btnSuccess);
  divContainer.insertBefore(divThirdTotal, btnSuccess);
  divContainer.insertBefore(divThirdDelete, btnSuccess);
  divThirdTotal.appendChild(spanThirdTotal);
  divThirdDelete.appendChild(btnThirdDelete);

  // inserta en la página cuarta row de items

  divContainer.insertBefore(spanBreakLine, btnSuccess);
  divContainer.insertBefore(divFourthItem, btnSuccess);
  divContainer.insertBefore(divFourthCost, btnSuccess);
  divContainer.insertBefore(divFourthLabelInput, btnSuccess);
  divContainer.insertBefore(divFourthTotal, btnSuccess);
  divContainer.insertBefore(divFourthTotal, btnSuccess);
  divContainer.insertBefore(divFourthDelete, btnSuccess);
  divFourthTotal.appendChild(spanFourthTotal);
  divFourthDelete.appendChild(btnFourthDelete);

  // inserta en la página quinta row de items

  divContainer.insertBefore(spanBreakLine, btnSuccess);
  divContainer.insertBefore(divFifthItem, btnSuccess);
  divContainer.insertBefore(divFifthCost, btnSuccess);
  divContainer.insertBefore(divFifthLabelInput, btnSuccess);
  divContainer.insertBefore(divFifthTotal, btnSuccess);
  divContainer.insertBefore(divFifthTotal, btnSuccess);
  divContainer.insertBefore(divFifthDelete, btnSuccess);
  divFifthTotal.appendChild(spanFifthTotal);
  divFifthDelete.appendChild(btnFifthDelete);
}

function deleteItem(event) {}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

window.onload = function() {
  // var calculatePriceButton = document.getElementById("calc-prices-button");
  // var createItemButton = document.getElementById("new-item-create");
  // var deleteButtons = document.getElementsByClassName("btn-delete");

  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  // for (var i = 0; i < deleteButtons.length; i++) {
  //   deleteButtons[i].onclick = deleteItem;
  // }

  createBody();
};
