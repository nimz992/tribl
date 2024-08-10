import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("User will navigate to Tribl page", () => {
  
  cy.login("email", "password");
  cy.visit("https://pre-prod.tribl.app/");
});

Then("Page should have title 'Tribl'", () => {
  cy.title().should("eq", "Tribl");
});

And("User Click Login Button", () => {
  cy.get('[href="/loginwithemail"] > .z-0').click();
});
