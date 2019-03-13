const API_URL = "/coffee.json";

let allEmailArray = [];
let allOrders;

fetch(API_URL)
  .then(function(order) {
    return order.json();
  })
  .then(function(data) {
    allOrders = data;
    allEmailArray = Object.keys(data);
    console.log(`logging allOrders: ${allOrders}`);
    console.log(allOrders);
    console.log(allEmailArray);

    drawEmailToListing(allEmailArray);
  });

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

function drawDetails(email) {
  const detailArea = document.querySelector("[data-details]");
  detailArea.textContent = "";
  const emailDiv = document.createElement("div");
  const coffeeDiv = document.createElement("div");
  const flavorDiv = document.createElement("div");
  const sizeDiv = document.createElement("div");
  const strengthDiv = document.createElement("div");

  //   console.log(`logging email inside drawDetails: ${email}`);

  if (email === allOrders[email].emailAddress) {
    // console.log(`logging from inside the if: ${allOrders[email]._id}`);
    emailDiv.textContent = `Email Address: ${allOrders[email].emailAddress}`;
    coffeeDiv.textContent = `Coffee: ${allOrders[email].coffee}`;
    flavorDiv.textContent = `Flavor: ${allOrders[email].flavor}`;
    sizeDiv.textContent = `Size: ${allOrders[email].size}`;
    strengthDiv.textContent = `Strength: ${allOrders[email].strength}`;
  }

  detailArea.appendChild(emailDiv);
  detailArea.appendChild(coffeeDiv);
  detailArea.appendChild(flavorDiv);
  detailArea.appendChild(sizeDiv);
  detailArea.appendChild(strengthDiv);
}

drawDetails(allOrders);
