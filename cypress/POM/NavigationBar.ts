export class NavigationBar {
WELCOME_BUTTON = "#main-view-link > span"
FORM_BUTTON = "#form-view-link > span"
STEPPER_BUTTON = "#stepper-view-link > span"
TWITTER_BUTTON = "#angular-on-twitter-svg > path"
YOUTUBE_BUTTON = "#angular-on-twitter-svg"

  clickWelcomePageButton() {
    cy.get(this.WELCOME_BUTTON).should('be.visible').click()
    cy.log("Click Welcome button")
  }
  clickFormPageButton() {
    cy.get(this.FORM_BUTTON).should('be.visible').click()
    cy.log("Click Form button")
  }
  clickStepperPageButton() {
    cy.get(this.STEPPER_BUTTON).should('be.visible').click()
    cy.log("Click Stepper button")
  }
  clickYoutubeButton() {
    cy.get(this.YOUTUBE_BUTTON).should('be.visible').click()
    cy.log("Click Youtube button")
  }
  clickTwitterButton() {
    cy.get(this.TWITTER_BUTTON).should('be.visible').click()
    cy.log("Click Twitter button")
  }
}
