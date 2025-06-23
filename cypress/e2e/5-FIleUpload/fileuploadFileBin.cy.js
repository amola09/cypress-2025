///<reference types="cypress"/>

describe("TC01: Verify File upload functionality in cypress:",function(){

    it("TC001: Verify single & double file upload:",function(){
  
    cy.visit("https://filebin.net/");
    
    cy.get('#fileField').selectFile('cypress/e2e/5-FIleUpload/sampleFile.jpeg')
   
    cy.wait(12000)
    cy.get('[class="lead"]').should('contain',' was created')
     cy.get('[class="btn btn-primary"]').should('be.visible')
    
    })
})












