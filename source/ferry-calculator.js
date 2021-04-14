const TRIP_PRICE = 25;

function calculateTripCost(cornBags) {
  if (isNaN(cornBags)) {
    throw new Error("Must be a numeric input");
  }

  if (cornBags < 0) {
    throw new Error("Must be a positive integer");
  }

  if (cornBags % 1 !== 0) {
    throw new Error("Must be a whole number");
  }

  if (cornBags === 0) {
    return TRIP_PRICE;
  }

  const numberOfTrips = 2 * cornBags - 1;
  const costOfAllTrips = numberOfTrips * TRIP_PRICE;

  return costOfAllTrips;
}

module.exports = calculateTripCost;
