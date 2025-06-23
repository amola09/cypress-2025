// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('OHRMlogin', (un, ps) => { 
    cy.get('[name="username"]').type(un)
    cy.get('[type="password"]').type(ps)

    cy.get('[type="submit"]').click()

})

Cypress.Commands.add('iframe', (uqselector) => { 
    return cy.get(uqselector).its('0.contentDocument.body').then(cy.wrap)
})
Cypress.Commands.add('getiFrameBody', (frameId) => {
    return cy.get(frameId).its('0.contentDocument.body').then(cy.wrap)
})
//23,cySession
Cypress.Commands.add('loginBySession', (uid, pw) => {
    cy.session([uid, pw], () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.visit('/web/index.php/auth/login') //baseurl set
        cy.get('[name="username"]').type(uid)
        cy.get('[name="password"]').type(pw)
        cy.get('button[type="submit"]').click()
    })

})

Cypress.Commands.add('parseXlsx', (inputFile) => {
return cy.task('parseXlsx' , { filePath: inputFile})
})
// Cypress.Commands.add('parseXlsx', (inputFile) => {  //for excel data import
//              return cy.task('parseXlsx' , { filePath: inputFile})
//         })
   