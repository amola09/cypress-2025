///<reference types ='cypress' />

describe("verify custom command in cypress", () => {
    beforeEach(() => {
        cy.loginBySession('Admin', 'admin123')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        //cy.visit('/web/index.php/dashboard/index') //base url set
    })


    it('test case 1', () => {
        cy.get('.oxd-text--h6').should('have.text', 'Dashboard')

    })

    it('test case 2', () => {

        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a > span').should('have.text', 'Admin')

    })
    it('test case 3', () => {

        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a > span').should('have.text', 'Admin')

    })
    it('test case 4', () => {

        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a > span').should('have.text', 'Admin')

    })
    it('test case 5', () => {

        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a > span').should('have.text', 'Admin')

    })

})