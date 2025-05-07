// page visit -->login --> actions1 --> action2 -->action3 -->logout
//-----------------------------
// before() : executed once first(before stat of describe block)
// beforeEach() :before each it bolck   
// after() :at end and once
// afterEach() : after each it bolck


///<reference types ='cypress'/>


describe("TC-04: cypress with hooks:",function(){

    before(function(){
        cy.log('I am before executes once')
    })

    beforeEach(function(){
        cy.log('I am beforeEach executes before each it blocks')
    })
    it("Test Case-1",function(){
        cy.log("this is it block Test Case-1")

    })
    it("Test Case-2",function(){
        cy.log("this is it block Test Case-2")

    })
    it("Test Case-3",function(){
        cy.log("this is it block Test Case-3")

    })
    after(function(){
        cy.log('I am after executes after all once')
    })

    afterEach(function(){
        cy.log('I am beforeEach executes before each it blocks')
    })
})