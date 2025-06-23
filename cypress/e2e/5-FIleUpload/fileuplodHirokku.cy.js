///<reference types="cypress"/>

describe("TC01: Verify File upload functionality in cypress:",function(){

    it("TC001: Verify single & double file upload:",function(){
  
    cy.visit("https://the-internet.herokuapp.com/upload");
    
    cy.get('[id="file-upload"]').selectFile('cypress/e2e/5-FIleUpload/sampleFile.jpeg')
    
    cy.get('#file-submit').click()
    
    cy.get('h3').should('have.text','File Uploaded!')
    cy.get('h3').should('contain','File Uploaded!')
    cy.get('[id="content"] h3').should('have.text','File Uploaded!')
    })
})












