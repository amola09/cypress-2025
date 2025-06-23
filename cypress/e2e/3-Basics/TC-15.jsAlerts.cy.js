///<reference types ="cypress"/>
//1.           2.         3.
describe("TC15: Verify js alerts in cypress:",function(){

    it("TC001: Verify Simple Window:alert in Cypress:",function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.on('window:alert',function(text){
            expect(text).to.eq('I am a JS Alert')
            return true
            
        })
        cy.get('[onclick="jsAlert()"]').click()

        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    

    })

    it("TC002: Verify Simple Window:Confirm in Cypress:",function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.on('window:confirm',function(text){
            expect(text).to.eq('I am a JS Confirm')
            return true
            
        })
        cy.get('[onclick="jsConfirm()"]').click()

        cy.get('#result').should('have.text', 'You clicked: Ok')
    

    })
    it("TC003: Verify Simple Window:Confirm in Cypress:",function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.on('window:confirm',function(text){
            expect(text).to.eq('I am a JS Confirm')
            return false
            
        })
        cy.get('[onclick="jsConfirm()"]').click()

        cy.get('#result').should('have.text', 'You clicked: Cancel')
    

    })
    it("TC004: Verify Simple Window:Prompt in Cypress:",function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then(function(win){
            cy.stub(win,'prompt').returns('amol')
        })
            
        
        cy.get('[onclick="jsPrompt()"]').click()

        cy.get('#result').should('have.text', 'You entered: amol')
    

    

    })
    it("TC005: Verify Simple Window:Prompt in Cypress:",function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then(function(win){
            cy.stub(win,'prompt').returns(null)
        })
          
        
        cy.get('[onclick="jsPrompt()"]').click()

        cy.get('#result').should('have.text', 'You entered: null')
    

    })

    
})