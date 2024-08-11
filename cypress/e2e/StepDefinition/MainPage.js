import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("User will navigate to Tribl page", () => {
  cy.viewport("macbook-15");
  // cy.login("email", "password");
  cy.visit("https://www.tribl.app/");
  cy.get(".iubenda-cs-accept-btn").click();
  cy.wait(5000);
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

Then("User clicks on Add block", () => {
  cy.get(
    "button[class='z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 gap-unit-2 rounded-full w-full [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-primary text-primary-foreground data-[hover=true]:opacity-hover text-medium md:max-w-none md:p-0 h-[48px]']",
    { timeout: 10000 }
  ).click();
});

Then("User click on link", () => {
  cy.get(
    "body main div div div div div:nth-child(1) div:nth-child(1) div:nth-child(1)"
  ).click();
});

Then("User add random link", () => {
  // cy.get("input[id='react-aria8693945485-:rf:']",{timeout:10000}).type("www.google.com");
  cy.get("input").type("www.google.com");
});

Then("User click on Add button", () => {
  cy.get("div[class='w-[100px] false'] button[type='button']").click();
});
