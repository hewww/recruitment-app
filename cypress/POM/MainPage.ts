import {NavigationBar} from "./NavigationBar";

export class MainPage extends NavigationBar {

  clickLearnAngular() {
      //invoke() to open Angular Page in this same browser tab
      cy.get('[href="https://angular.io/tutorial"]').invoke('removeAttr', 'target').click()
  }

  clickNewComponentButton() {
    cy.get(':nth-child(8) > :nth-child(1)').should('have.text',"New Component").first().click()
    cy.log("Click New Component button")
    return this
  }

  clickAngularMaterialButton() {
    cy.get(':nth-child(8) > :nth-child(2)').should('have.text',"Angular Material").first().click()
    cy.log("Click Angular")
    return this
  }
}
