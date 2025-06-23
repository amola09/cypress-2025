describe("TC29: Verify contact us page with payload:",function(){ //suite
    it("TC001: Verify contact us page for valid data:",function(){ //test case          
       cy.parseXlsx("cypress/fixtures/excelPayload_1.csv").then((jasonData)=>{
        
        // cy.log(jasonData)
        // cy.log(jasonData[0].data[1][0])
        for(let i=1 ; i<jasonData[0].data.length;i++){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        // sheet1 row column
        cy.get('[name="first_name"]').type(jasonData[0].data[i][0])
         cy.get('[name="last_name"]').type(jasonData[0].data[i][1])
         cy.get('[name="email"]').type(jasonData[0].data[i][2])
         cy.get('[name="message"]').type(jasonData[0].data[i][3])
 
         cy.get('[type="submit"]').click()
         cy.get('h1').should('have.text','Thank You for your Message!')
        }
       })
  
       })
    })

    //------------------------steps to use excel payoad in cypress---------------------------------------------------------------------
   
// 5. npm install node-xlsx --save-dev 


// 7. support/ commands.js 
// (copy below code at the last of file)
// -----------------------------------------------------------------
// Cypress.Commands.add('parseXlsx', (inputFile) => {
// return cy.task('parseXlsx' , { filePath: inputFile})
// })
// ------------------------------------------------------------------

// 8.cypress.config.js    
//     
// ------------------------------------------------------------------
// const { defineConfig } = require("cypress");

// const xlsx = require('node-xlsx').default;
// const fs = require('fs');
// const path = require('path');
// module.exports = defineConfig({
// e2e: {
// setupNodeEvents(on, config) {
// // implement node event listeners here
// on("task", { parseXlsx({ filePath }){
// return new Promise((resolve, reject) => {
// try{
// const jsonData = xlsx.parse(fs.readFileSync(filePath))
// resolve(jsonData);
// } catch(e){
// reject(e);
// }
// });
// }})
// }
// }
// });


