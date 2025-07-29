///<reference types = "cypress" />

describe('TC03: Verify login functionality of Orange HRM with custom commands:',function(){
    it("TC01: Verify login functionality with valid data:",function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // cy.get('[name="username"]').type('Admin')
        // cy.get('[type="password"]').type('admin123')

        // cy.get('[type="submit"]').click()

        cy.OHRMlogin('Admin','admin123')

        cy.get('.oxd-text--h6').should('have.text','Dashboard')
    })

it("TC02: Verify login functionality with valid data-2:",function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // cy.get('[name="username"]').type('Admin')
        // cy.get('[type="password"]').type('admin123')

        // cy.get('[type="submit"]').click()

        cy.OHRMlogin('Admin','admin123')

        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a > span').should('have.text','Admin')
    })
})


/*
//Expalnation line no. 29:

The long CSS selector - This is locating a specific element in the page structure:

It starts from the element with ID #app

Then drills down through multiple nested divs and components

Finally targets the first li item's anchor tag's span within a navigation menu */