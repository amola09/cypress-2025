///<reference types="cypress"/>

describe/context("Basic cypress commands:",()=>{

    beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  })
    it('.type - type into a dom element',()=>{
        cy.get('#email1').type('anyemail@gmail.com')
        cy.get('#email1').should('have.value','anyemail@gmail.com')
       
        // // Delay each keypress by 0.1 sec
        cy.get('.action-email').type('slow.typing@email.com', { delay: 100 })
        cy.get('.action-email').should('have.value', 'slow.typing@email.com')

        
    })
    it('',function(){
       cy.get('.action-disabled').type('disabled error checking', { force: true })
        // Ignore error checking prior to type
        // like whether the input is visible or disabled
        
        cy.get('.action-disabled').should('have.value', 'disabled error checking')
  

    })
})