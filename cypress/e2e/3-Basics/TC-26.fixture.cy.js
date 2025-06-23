///<reference types = "cypress" />

describe("TC02: Verify Contact Us page from webdriver University for valid and invalid data:",function(){

    it("TC001: Verify contactus page with valid data:",function(){
        //AAA
        //Arrangement
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        // Action
        cy.get('[name="first_name"]').type('Amol')
        cy.get('[name="last_name"]').type('Pawar')
        cy.get('[name="email"]').type('AmolPawar@gmail.com')
        cy.get('[name="message"]').type("i Learn Cypress")
        cy.get('[type="submit"]').click()
        // Assertion
        cy.get('h1').should('have.text','Thank You for your Message!')
    })

    it("TC002: Verify contactus page with valid data with fixture:",function(){
        
         cy.fixture("fixdata_1").then((data) => {
        //AAA
        //Arrangement
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        // Action
        cy.get('[name="first_name"]').type(data.fn)
        cy.get('[name="last_name"]').type(data.ln)
        cy.get('[name="email"]').type(data.email)
        cy.get('[name="message"]').type(data.msg)
        cy.get('[type="submit"]').click()
        // Assertion
        cy.get('h1').should('have.text','Thank You for your Message!')
    })       
   })
   it("TC003: Verify contactus page with valid data with fixture with array:",function(){
        
         cy.fixture("fixdata_2").then((data) => {
            data.forEach(el => {
                //AAA
        //Arrangement
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        // Action
        cy.get('[name="first_name"]').type(el.fn)
        cy.get('[name="last_name"]').type(el.ln)
        cy.get('[name="email"]').type(el.email)
        cy.get('[name="message"]').type(el.msg)
        cy.get('[type="submit"]').click()
        // Assertion
        cy.get('h1').should('have.text','Thank You for your Message!')
                
            });
        
    })       
   })

})