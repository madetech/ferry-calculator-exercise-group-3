/*
 Function input: integer number of corn bags
 Function output: cost in number of pence
*/

const calculateTripCost = require("./ferry-calculator");

test("Given 1 bag, the cost of transport is 25 pence", () => {
  var cost = calculateTripCost(1);
  expect(cost).toBe(25);
});

test("Given 0 bags, the cost of transport is 25 pence", () => {
  var cost = calculateTripCost(0);
  expect(cost).toBe(25);
});

test("Given 2 bags, the cost of transport is 75 pence", () => {
  var cost = calculateTripCost(2);
  expect(cost).toBe(75);
});

test("Given 10 bags, the cost of transport is 475 pence", () => {
  var cost = calculateTripCost(10);
  expect(cost).toBe(475);
});

test("Given a negative input, an error is returned", () => {
  expect(() => calculateTripCost(-1)).toThrow("Must be a positive integer");
});

test("Given a fractional input, an error is returned", () => {
  expect(() => calculateTripCost(1.5)).toThrow("Must be a whole number");
});

test("Given a string input, an error is returned", () => {
  expect(() => calculateTripCost("foo")).toThrow("Must be a numeric input");
});
