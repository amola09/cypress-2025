///<reference types = "cypress" />


describe('TC05- Verify hooks with custom command on orangeHRM Login:',function(){
    
    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    it('TC001: Verify hooks with custom commands-1:',function(){


        cy.OHRMlogin('Admin','admin123')

        cy.get('.oxd-text--h6').should('have.text','Dashboard')

    })
    it('TC002: Verify hooks with custom commands-2:',function(){

        cy.OHRMlogin('Admin','admin123')

        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a > span').should('have.text','Admin')

    })
})