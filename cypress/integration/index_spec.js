describe("Calculator", () => {
  it("displays a form with an input field", () => {
    cy.visit("/");
    cy.get("form input[name=bagsOfCorn][type=number]")
      .invoke("val")
      .should("eq", "0");
  });

  it('displays a form with a "number of geese" input field, with a default value of zero', () => {
    cy.visit("/");
    cy.get("form input[name=numberOfGeese][type=number]")
      .invoke("val")
      .should("eq", "0");
  });

  it("should accept a numeric value and display the trip cost for a single bag of corn", () => {
    cy.visit("/");
    cy.get("form label[for=bagsOfCorn]").click().type("1");
    cy.get("form input[type=submit]").click();
    cy.get('[data-test-id="tripCost"]').invoke("text").should("eq", "£0.25");
  });

  it("should display the trip cost for the inputted number of bags of corn", () => {
    cy.visit("/");
    cy.get("form input[name=bagsOfCorn][type=number]").type("2");
    cy.get("form input[type=submit]").click();
    cy.get('[data-test-id="tripCost"]').invoke("text").should("eq", "£0.75");
  });

  it("should display the trip cost for no bags of corn", () => {
    cy.visit("/");
    cy.get("form input[name=bagsOfCorn][type=number]").type("0");
    cy.get("form input[type=submit]").click();
    cy.get('[data-test-id="tripCost"]').invoke("text").should("eq", "£0.25");
  });

  it("should display an error if an inappropriate input is given", () => {
    cy.visit("/");
    cy.get("form input[name=bagsOfCorn][type=number]").clear();
    cy.get("form input[name=bagsOfCorn][type=number]").type("-1");
    cy.get("form input[type=submit]").click();
    cy.get('[data-test-id="errorMessage"]')
      .invoke("text")
      .should("eq", "Must be a positive integer");
  });

  it("should remove the error is a valid value is subsequently submitted", () => {
    cy.visit("/");
    cy.get("form input[name=bagsOfCorn][type=number]").clear();
    cy.get("form input[name=bagsOfCorn][type=number]").type("-1");
    cy.get("form input[type=submit]").click();
    cy.get("form input[name=bagsOfCorn][type=number]").clear();
    cy.get("form input[name=bagsOfCorn][type=number]").type("2");
    cy.get("form input[type=submit]").click();
    cy.get('[data-test-id="errorMessage"]').invoke("text").should("eq", "");
  });

  it("should return a list of crossing steps for a valid number of geese and bags of corn", () => {
    cy.visit("/");

    cy.get("form input[type=number]").clear();
    cy.get("form label[for=bagsOfCorn]").click().type("1");
    cy.get("form label[for=numberOfGeese]").click().type("1");
    cy.get("form input[type=submit]").click();
    cy.get('[data-test-id="tripCost"]').invoke("text").should("eq", "£0.75");
    cy.get("[data-test-id=tripSteps] tr")
      .eq(0)
      .should("contain", "Go to market with corn");
    cy.get("[data-test-id=tripSteps] tr")
      .eq(1)
      .should("contain", "Return to farm");
    cy.get("[data-test-id=tripSteps] tr")
      .eq(2)
      .should("contain", "Go to market with goose");
  });

  it("it should clear the table when making a second submission", () => {
    cy.visit("/");

    cy.get("form input[type=number]").clear();
    cy.get("form label[for=bagsOfCorn]").click().type("1");
    cy.get("form label[for=numberOfGeese]").click().type("1");
    cy.get("form input[type=submit]").click();

    cy.get("form input[type=number]").clear();
    cy.get("form label[for=bagsOfCorn]").click().type("0");
    cy.get("form label[for=numberOfGeese]").click().type("2");
    cy.get("form input[type=submit]").click();

    cy.get("[data-test-id=tripSteps] tr")
      .eq(0)
      .should("contain", "Go to market with goose");
    cy.get("[data-test-id=tripSteps] tr")
      .eq(1)
      .should("contain", "Return to farm");
    cy.get("[data-test-id=tripSteps] tr")
      .eq(2)
      .should("contain", "Go to market with goose");
  });
});
