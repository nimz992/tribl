import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("User will navigate to Tribl page", () => {
  cy.viewport("macbook-15");
  cy.login("email", "password");
  cy.visit("https://pre-prod.tribl.app/");
});

Then("Page should have title 'Tribl'", () => {
  cy.title().should("eq", "Tribl");
});

And("User Click Login Button", () => {
  cy.get('[href="/loginwithemail"] > .z-0').click();
});

And("User type email and passowrd", () => {
  cy.get(
    "div[class='p-8 w-full bg-white'] div[class='flex justify-center text-center w-full px-4'] div input[placeholder='Username, email']"
  ).type("nimrahanwar992@gmail.com");
  cy.get(
    "body > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(2) > input:nth-child(1)"
  ).type("Sanaibex123@");
});
Then("User Logged-in", () => {
  cy.get(
    ".p-8 > .text-center > :nth-child(1) > form > :nth-child(4) > .text-base"
  ).click();
});
