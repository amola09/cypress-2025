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

  it("TC002: Verify contact Us page for invalid data:",function(){

    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")

        cy.get('[name="first_name"]').type('Amol')
        cy.get('[name="last_name"]').type('Pawar')
        cy.get('[name="email"]').type('AmolPawar')
        cy.get('[name="message"]').type("i Learn Cypress")
        cy.get('[type="submit"]').click()

    cy.contains('Error: Invalid email address').should('be.visible')
  })

  it("TC003: Verify Contact Us page with Invalid data-2:", function(){

    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")

    cy.get('[name="first_name"]').type('Amol')
    cy.get('[name="last_name"]').type('Pawar')
    cy.get('[name="email"]').type('AmolPawar@gmail.com')
    cy.get('[type="submit"]').click()

    cy.contains('Error: all fields are required').should('be.visible')
    
  })
  it("TC004: Verify Contact Us page with Reset option:",function(){

    //AAA
        //Arrangement
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        // Action
        cy.get('[name="first_name"]').type('Amol')
        cy.get('[name="last_name"]').type('Pawar')
        cy.get('[name="email"]').type('AmolPawar@gmail.com')
        cy.get('[name="message"]').type("i Learn Cypress")
        
        cy.get('[type="reset"]').click()

        // Assertion

        cy.get('[name="first_name"]').should('have.text','')
        cy.get('[name="last_name"]').should('have.text',"")
        cy.get('[name="email"]').should('have.text','')
        cy.get('[name="message"]').should('have.text','')
        


  })

  
})