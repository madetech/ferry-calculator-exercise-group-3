describe("Calculator", () => {
  it("displays a form with an input field", () => {
    cy.visit("/");
    cy.get("form input[name=bagsOfCorn][type=number]");
  });

  it("should accept a numeric value and display the trip cost for a single bag of corn", () => {
    cy.visit("/");
    cy.get("form input[name=bagsOfCorn][type=number]").type("1");
    cy.get("form input[type=submit]").click();
    cy.get('[data-test-id="tripCost"]').contains(25);
  });

  it("should display the trip cost for the inputted number of bags of corn", () => {
    cy.visit("/");
    cy.get("form input[name=bagsOfCorn][type=number]").type("2");
    cy.get("form input[type=submit]").click();
    cy.get('[data-test-id="tripCost"]').contains(75);
  });

  it("should display the trip cost for no bags of corn", () => {
    cy.visit("/");
    cy.get("form input[name=bagsOfCorn][type=number]").type("0");
    cy.get("form input[type=submit]").click();
    cy.get('[data-test-id="tripCost"]').contains(25);
  });
});
