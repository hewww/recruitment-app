import './commands'

beforeEach(() => {
  cy.visit("http://localhost:4200/")
})

afterEach(() => {
  cy.clearAllCookies()
  cy.clearAllSessionStorage()
  cy.clearAllLocalStorage()
})
