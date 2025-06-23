const { defineConfig } = require("cypress");
//TC-29 payload.cy.js  part -1
const xlsx = require('node-xlsx').default;
const fs = require('fs');
const path = require('path');
//TC-29 payload.cy.js  part -1 end part 2 is below


module.exports = defineConfig({
  failOnStatusCode: false,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
     //baseUrl : 'https://opensource-demo.orangehrmlive.com/',
     
     //TC-29 payload.cy.js part-2
// implement node event listeners here

     on("task", { parseXlsx({ filePath }){
return new Promise((resolve, reject) => {
try{
const jsonData = xlsx.parse(fs.readFileSync(filePath))
resolve(jsonData);
} catch(e){
reject(e);
}
});
}})
//TC-29 payload.cy.js part-2 end part 1 is above

      //Start: 14.cyTask.cy.js------------------------
      //task1
     on('task',{
      myTask1(){
        console.log('hi')
        return null
      }
     })
      //task2
      on('task', {
        myTask2(name) {
          console.log(`hi... ${name} how are you?`)
          return null
        }
      })
      //task3
      on('task', {
        addition({ a, b }) {
          c = a + b
          console.log(`addition is ${c}`)
          return c
        }
      })
      //END - 14.cyTask.cy.js------------------------
 


    },
  },
});
