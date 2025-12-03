/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que estou na página inicial do Portal Gov.br em {string}", (path) => {
  cy.log(`Acessando https://www.gov.br${path}`);
  cy.visit(`https://www.gov.br${path}`);

  // Ignorar erros JS do site
  Cypress.on("uncaught:exception", (err) => {
    if (err.message.includes("$ is not defined")) return false;
  });

  cy.get("body").should("be.visible");
});

When("digito {string} no campo de busca", (termo) => {
  cy.log(`Digitando "${termo}" no campo de busca`);
  cy.get("input[placeholder='O que você procura?']", { timeout: 10000 })
    .should("be.visible")
    .clear({ force: true })
    .type(termo, { force: true });
});

When("pressiono Enter", () => {
  cy.log("Pressionando Enter");
  cy.get("input[placeholder='O que você procura?']").type("{enter}", {
    force: true,
  });
});

Then("devo ser redirecionado para a página de resultados da busca", () => {
  cy.log("Verificando redirecionamento para /search");
  cy.url({ timeout: 12000 }).should("include", "/search");
});

When('clico na aba "Sites"', () => {
  cy.log("Clicando na aba 'Sites'");
  cy.contains("a", /Sites\s*\(\d+\)/, { timeout: 10000 })
    .should("be.visible")
    .click({ force: true });

  // Evidência visual do sucesso
  cy.screenshot();
});
