import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("User will navigate to Tribl page", () => {
  // cy.visit(
  //   "https://pre-prod.tribl.app/?_vercel_share=NQK95DCxPvER41fbVTj3D2YfPIqGXfUe"
  // );

  cy.login("email", "password");
  cy.visit("https://pre-prod.tribl.app/");
});

Then("Page should have title 'Tribl'", () => {
  cy.title().should("eq", "Tribl");
});
