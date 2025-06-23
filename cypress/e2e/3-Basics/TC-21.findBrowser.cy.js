/// <reference types='cypress' />
describe('verify shadowdom in cypress', () => {
    it('example 1', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.log(`Running in ${Cypress.browser.name}`)
        cy.log(`Running in ${Cypress.browser.family}`)
        cy.log(`Running in ${Cypress.browser.version}`)
        cy.log(`Running in ${Cypress.browser.majorVersion}`)
    })
})