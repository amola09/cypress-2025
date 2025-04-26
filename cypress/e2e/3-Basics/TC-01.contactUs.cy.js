///<reference types = "cypress" />

describe("TC-01: Verify ContactUs Page from Webdriver university:",function(){
    it("TC001-Verify ContactUS page for valid data:",function(){

        //AAA - Arrangement,Action,Assertion
        // Arrangement
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        // Action
        cy.get('[name="first_name"]').type('Amol')
        cy.get('[name="last_name"]').type('Pawar')
        cy.get('[name="email"]').type('AmolPawar@gmail.com')
        cy.get('[name="message"]').type('I lear Cypress')
        cy.get('[type="submit"]').click()
        // Assertion
        cy.get('h1').should('have.text','Thank You for your Message!')

    })
})