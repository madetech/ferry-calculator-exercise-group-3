/*
 Function input: integer number of corn bags
 Function output: cost in number of pence
*/

const { calculateTripCost, calculateTripSteps } = require("./ferry-calculator");

describe("calculateTripSteps", () => {
  /*
    First input: integer number of corn
    Second input: integer number of geese
    Return: array of strings representing steps
  */
  const cases = [
    [0, 0, ["Go to market"]],
    [0, 1, ["Go to market with goose"]],
    [1, 0, ["Go to market with corn"]],
    [
      1,
      1,
      ["Go to market with corn", "Return to farm", "Go to market with goose"],
    ],
    [
      1,
      2,
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
    [
      2,
      1,
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
      2,
      0,
      ["Go to market with corn", "Return to farm", "Go to market with corn"],
    ],
    [
      0,
      2,
      ["Go to market with goose", "Return to farm", "Go to market with goose"],
    ],
  ];

  test.each(cases)(
    "Given %p bag of corn and %p goose",
    (bagsOfCorn, numberOfGeese, expectedSteps) => {
      expect(calculateTripSteps(bagsOfCorn, numberOfGeese)).toEqual(
        expectedSteps
      );
    }
  );

  test("Given a negative input, an error is returned", () => {
    expect(() => calculateTripSteps(-1, 0)).toThrow(
      "Must be a positive integer"
    );
  });

  test("Given a fractional input, an error is returned", () => {
    expect(() => calculateTripSteps(1.5, 0)).toThrow(
      "Must be a numeric integer input"
    );
  });

  test("Given a string input, an error is returned", () => {
    expect(() => calculateTripSteps("foo", 0)).toThrow(
      "Must be a numeric integer input"
    );
  });

  test("Given a numeric string input, an error is returned", () => {
    expect(() => calculateTripSteps("0", 0)).toThrow(
      "Must be a numeric integer input"
    );
  });
});

describe("calculateTripCost", () => {
  test("Given 1 bag, the cost of transport is 25 pence", () => {
    var cost = calculateTripCost(1);
    expect(cost).toBe(25);
  });

  /*
  A single trip with no bags still costs 25p because the farmer ends up at the market
  */
  test("Given 1 trip step, the cost of transport is 25 pence", () => {
    var cost = calculateTripCost(1);
    expect(cost).toBe(25);
  });

  test("Given 2 trip steps, the cost of transport is 50 pence", () => {
    var cost = calculateTripCost(2);
    expect(cost).toBe(50);
  });

  test("Given 10 trip steps, the cost of transport is 250 pence", () => {
    var cost = calculateTripCost(10);
    expect(cost).toBe(250);
  });

  test("Given a negative input, an error is returned", () => {
    expect(() => calculateTripCost(-1)).toThrow("Must be a positive integer");
  });

  test("Given a fractional input, an error is returned", () => {
    expect(() => calculateTripCost(1.5)).toThrow(
      "Must be a numeric integer input"
    );
  });

  test("Given a string input, an error is returned", () => {
    expect(() => calculateTripCost("foo")).toThrow(
      "Must be a numeric integer input"
    );
  });

  test("Given a numeric string input, an error is returned", () => {
    expect(() => calculateTripCost("0")).toThrow(
      "Must be a numeric integer input"
    );
  });
});
