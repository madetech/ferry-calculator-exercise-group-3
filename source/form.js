const calculateTripCost = require("./ferry-calculator");

var form = document.querySelector("form");
var inputField = document.querySelector("input[name=bagsOfCorn]");
var resultContainer = document.querySelector("[data-test-id=tripCost]");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  resultContainer.innerHTML = calculateTripCost(inputField.value);
});
