///<reference types="cypress"/>

describe("TC01: Verify File upload functionality in cypress:",function(){

    it("TC001: Verify single & double file upload:",function(){
        cy.visit("https://testautomationpractice.blogspot.com/")
       
        const file1 = "C:/Users/Amol/Downloads/Steps to Execute the Collection in Postman.docx"
        const file2 = "cypress/e2e/5-FIleUpload/New_POS.postman_collection.json"
         
        //Sibgle file upload
        //cy.get('#singleFileInput').selectFile(file1)
        cy.get('#singleFileInput').selectFile("C:/Users/Amol/Downloads/Steps to Execute the Collection in Postman.docx")
        
        cy.get('#singleFileForm [type="submit"]').click()
        cy.get('#singleFileStatus').should('contain','Steps to Execute the Collection in Postman.docx')
        
        
        cy.get('#multipleFilesInput').selectFile([file1,file2])
        
        cy.get('#multipleFilesForm button').click()
        cy.get('#multipleFilesStatus').should('contain','Steps to Execute the Collection in Postman.docx')
        cy.get('#multipleFilesStatus').should('contain','New_POS.postman_collection.json')

    })
})