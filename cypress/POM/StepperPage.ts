import {NavigationBar} from "./NavigationBar";

export class StepperPage extends NavigationBar {

  submitName() {
    cy.get('button[type="submit"]').then(($el) => {
      Cypress.dom.isVisible($el) // true
    }).first().click()
    return this
  }
  submitAddress() {
    cy.get('button[type="submit"]').then(($el) => {
      Cypress.dom.isVisible($el) // true
    }).last().click()
    return this
  }

  clickBackButton() {
    cy.get("mat-button-wrapper").should('have.text', "Back")
    return this
  }

  inputName(name: string) {
    cy.get("#mat-input-0").should('be.visible').type(name)
    this.submitName()
    return this
  }

  inputAddress(address: string) {
    cy.get("#mat-input-1").should('be.visible').type(address)
    this.submitAddress()
    return this
  }

}

