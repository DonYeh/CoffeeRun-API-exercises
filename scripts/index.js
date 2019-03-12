const API_URL = "/coffee.json";

let allOrdersArray = [];
let allOrders;

// function accumulateOrders(theActualData) {
//   allOrdersArray = [allOrdersArray, theActualData];
//   //   storeOrders(allOrdersArray);
//   //   if (theActualData.length === 0) {
//   //     main();
//   console.log(API_URL);
// }

// function storeOrders(arrayOfOrders) {
//   const jsonCharacters = JSON.stringify(arrayOfOrders);
//   console.log(`saving ${arrayOfOrders.length} orders`);
//   localStorage.setItem("coffee-orders", jsonCharacters);
// }

// function retrievePageOfOrders() {
fetch(API_URL)
  .then(function(order) {
    return order.json();
  })
  .then(function(data) {
    allOrders = data;
    allOrdersArray = Object.keys(data);
    console.log(allOrders);
    drawEmailToListing(allOrdersArray);
  });
// }

function drawEmailToListing(keys) {
  keys.forEach(function(customer) {
    const anchorElement = document.createElement("a");
    anchorElement.textContent = customer;
    anchorElement.addEventListener("click", function() {
      drawDetails(customer);
    });
    const liElement = document.createElement("li");
    liElement.appendChild(anchorElement);
    const liArea = document.querySelector("[data-listing]");
    liArea.appendChild(liElement);
  });
}

// function main(){

// };
