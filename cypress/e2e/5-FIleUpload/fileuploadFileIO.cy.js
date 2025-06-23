///<reference types="cypress"/>

describe("TC01: Verify File upload functionality in cypress:",function(){

    it("TC001: Verify single & double file upload:",function(){
  
    cy.visit("https://www.file.io/");

    cy.get('[class="css-zpjtsm e12cce780"]').selectFile('cypress/e2e/5-FIleUpload/sampleFile.jpeg')

    
    })
})