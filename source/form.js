const { calculateTripCost, calculateTripSteps } = require("./ferry-calculator");

var form = document.querySelector("form");
var cornInputField = document.querySelector("input[name=bagsOfCorn]");
var gooseInputField = document.querySelector("input[name=numberOfGeese]");
var resultContainer = document.querySelector("[id=tripCost]");
var errorContainer = document.querySelector("[id=errorMessage]");
var tableContainer = document.querySelector("table[id=tripSteps]");

function formatCost(numberOfPence) {
  return `£${numberOfPence / 100}`;
}

function populateTableWithSteps(steps) {
  let htmlRows = "";

  for (var step of steps) {
    htmlRows += `<tr><td>${step}</td></tr>`;
  }

  return htmlRows;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  errorContainer.innerHTML = "";
  try {
    const tripSteps = calculateTripSteps(
      Number(cornInputField.value),
      Number(gooseInputField.value)
    );
    const stepsHtml = populateTableWithSteps(tripSteps);

    const tripCost = calculateTripCost(tripSteps.length);

    tableContainer.innerHTML = stepsHtml;
    resultContainer.innerHTML = formatCost(tripCost);
  } catch (error) {
    errorContainer.innerHTML = error.message;
  }
});
