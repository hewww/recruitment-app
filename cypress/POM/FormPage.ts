import {NavigationBar} from "./NavigationBar";

export class FormPage extends NavigationBar {
  inputName(name: string) {
    cy.get('#name').should('be.visible').clear().type(name)
    cy.log("Name input")
    return this
  }

  inputAlterEgo(alterEgo: string) {
    cy.get("#alterEgo").should('be.visible').clear().type(alterEgo)
    cy.log("AlterEgo input")
    return this
  }

  selectPower(power: string) {
    cy.get("#power").should('be.visible').select(power).invoke('val').should('eq', power)
    cy.log("Selected Power: " + power)
    return this
  }

  clickSubmitButton() {
    cy.get(".btn-success").should('be.visible').click()
    cy.log("Click submit")
    return this
  }

  clickNewHeroButton() {
    cy.get(".btn-default").should('be.visible').click()
    return this
  }

  clickEditButton() {
    cy.get(":nth-child(1) > .btn").should('be.visible').click()
    cy.log("click Edit button")
    return this
  }

  addHero() {
    this
      .inputName(Cypress.env('heroName'))
      .inputAlterEgo(Cypress.env('alterEgo'))
      .selectPower(Cypress.env('heroPower'))
      .clickSubmitButton()
    return this
  }
}
