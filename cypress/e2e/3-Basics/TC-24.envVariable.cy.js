//dev,SIT,UAT,pre-prod,prod
/// <reference types='cypress' />
describe('environments in cypress', () => {
    it("environment example", () => {
        cy.visit('/index.html')
        cy.get('#login2').click()
        cy.wait(2000)
        //cy.log(Cypress.env('uid'))
        const userid = Cypress.env('uid')
        cy.get('[id="loginusername"]').should('be.visible').type(userid)
        cy.wait(2000)
        cy.get('#loginpassword').type(Cypress.env('pw'))
        cy.get('[onclick="logIn()"]').click()
        cy.get('#logout2').should('be.visible')
        cy.get('#nameofuser').should('contain', Cypress.env('uid'))
    })

})