import {NavigationBar} from "../POM/NavigationBar"
import {FormPage} from "../POM/FormPage"
import {StepperPage} from "../POM/StepperPage";
import {MainPage} from "../POM/MainPage";

describe('RecruitmentApp Tests', () => {
  const naviBar = new NavigationBar()
  const formPage = new FormPage()
  const stepperPage = new StepperPage()
  const mainPage = new MainPage()

  it("add hero test", () => {
    naviBar.clickFormPageButton()
    formPage.addHero()

    cy.get(":nth-child(2) > .col-xs-9").should('have.text',Cypress.env('heroName'))
    cy.get(":nth-child(3) > .col-xs-9").should('have.text',Cypress.env('alterEgo'))
    cy.get(":nth-child(4) > .col-xs-9").should('have.text',Cypress.env('heroPower'))
  })

  it("Add hero and then edit name test", () => {
  const editedName = "EditedName"

    naviBar.clickFormPageButton()
    formPage.addHero()
      .clickEditButton()
      .inputName(editedName)
      .clickSubmitButton()

    cy.get(":nth-child(2) > .col-xs-9").should('have.text',editedName)
    cy.get(":nth-child(3) > .col-xs-9").should('have.text',Cypress.env('alterEgo'))
    cy.get(":nth-child(4) > .col-xs-9").should('have.text',Cypress.env('heroPower'))
  })

  it('Add tele-address data', () => {
    naviBar.clickStepperPageButton()

    stepperPage
      .inputName(Cypress.env('stepperName'))
      .inputAddress(Cypress.env('stepperAddress'))

    cy.get("#cdk-step-content-0-2")
      .should('contain.text',Cypress.env('stepperName'))
      .should('contain.text', Cypress.env('stepperAddress'))
  })

  it('Check MainPage Angular Material button on virtual terminal', () => {
    mainPage.clickAngularMaterialButton()
    cy.get("[class=terminal]").should('have.text',"ng add @angular/material")
  })

})
