///<reference types="cypress" />

describe("verify file upload in cypress", () => { //suite
    it.skip("verify file upload in cypress", () => {
        cy.visit("https://www.demoblaze.com/index.html")
        cy.wait(3000)
        cy.screenshot('page')
        cy.get('a#nava').screenshot('logo')

    })
    it("verify contact us page for valid data", () => {

        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('dipanshu')
        cy.get('[name="last_name"]').type('chawde')
        cy.get('[name="email"]').type('dipanshu@gmail.com')
        cy.get('[name="message"]').type('hi , how are you')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })
})

//videos will be captured only by run command of cli
//npx cypress run --spec cypress/e2e/3-basics/25.screenShotVideo.cy.js --headed --browser edge