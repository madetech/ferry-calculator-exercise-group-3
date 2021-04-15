const TRIP_PRICE = 25;

const validTrips = new Map([
  ["0,0", ["Go to market"]],
  ["0,1", ["Go to market with goose"]],
  ["1,0", ["Go to market with corn"]],
  [
    "1,1",
    ["Go to market with corn", "Return to farm", "Go to market with goose"],
  ],
  [
    "2,1",
    [
      "Go to market with goose",
      "Return to farm",
      "Go to market with corn",
      "Return to farm with goose",
      "Go to market with corn",
      "Return to farm",
      "Go to market with goose",
    ],
  ],
  [
    "1,2",
    [
      "Go to market with corn",
      "Return to farm",
      "Go to market with goose",
      "Return to farm with corn",
      "Go to market with goose",
      "Return to farm",
      "Go to market with corn",
    ],
  ],
]);

function calculateTripSteps(cornBags, numberOfGeese) {
  if (!Number.isInteger(cornBags) || !Number.isInteger(numberOfGeese)) {
    throw new Error("Must be a numeric integer input");
  }

  if (cornBags < 0 || numberOfGeese < 0) {
    throw new Error("Must be a positive integer");
  }

  if (numberOfGeese === 0 && cornBags > 0) {
    var tripSteps = [];
    for (var i = 0; i < cornBags; i++) {
      tripSteps.push("Go to market with corn");
      tripSteps.push("Return to farm");
    }
    tripSteps.pop();
    return tripSteps;
  }

  if (cornBags === 0 && numberOfGeese > 0) {
    var tripSteps = [];
    for (var i = 0; i < numberOfGeese; i++) {
      tripSteps.push("Go to market with goose");
      tripSteps.push("Return to farm");
    }
    tripSteps.pop();
    return tripSteps;
  }

  return validTrips.get(`${cornBags},${numberOfGeese}`);
}

function calculateTripCost(stepCount) {
  if (!Number.isInteger(stepCount)) {
    throw new Error("Must be a numeric integer input");
  }

  if (stepCount < 0) {
    throw new Error("Must be a positive integer");
  }

  return stepCount * TRIP_PRICE;
}

module.exports = { calculateTripSteps, calculateTripCost };
