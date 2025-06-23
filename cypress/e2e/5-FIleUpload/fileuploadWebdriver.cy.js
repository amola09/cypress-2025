///<reference types="cypress"/>

describe("TC01: Verify File upload functionality in cypress:",function(){

    it("TC001: Verify single & double file upload:",function(){
  
    cy.visit("https://www.webdriveruniversity.com/File-Upload/index.html");
    
    cy.get('[id="myFile"]').selectFile('cypress/e2e/5-FIleUpload/sampleFile.jpeg')

   
   //Set up the alert handler BEFORE clicking the submit button
        const alertMessage = "Your file has now been uploaded!"; 
        
        cy.on('window:alert', (str) => {
            expect(str).to.eq(alertMessage);
        });

    cy.get('[id="submit-button"]').click()

 
   
    })
})

// 1. visit url -> get element from UI select file Path
// 2. setup alert message cy.on window:alert with str and comapre with alert message
// 3. then click on submit to upload selected file