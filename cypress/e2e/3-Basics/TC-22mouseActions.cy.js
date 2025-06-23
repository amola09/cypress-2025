/// <reference types='cypress' />
describe('TC:22 Verify shadowdom in cypress', () => {
    it('TC01: mouse drag and drop', () => {
        cy.visit('https://www.webdriveruniversity.com/Actions/index.html')
        // cy.get('#draggable > p').trigger('mousedown',{which : 1}) //mouse click hold
        // cy.get('#droppable > p').trigger('mousemove', {which : 1}).trigger('mouseup',{force: true})
        // cy.get('#droppable > p >b').should('have.text','Dropped!')

        cy.get('#draggable > p').trigger('mousedown', { button: 1 }) //mouse click hold
        cy.get('#droppable > p').trigger('mousemove', { button: 1 }).trigger('mouseup', { force: true })
        cy.get('#droppable > p >b').should('have.text', 'Dropped!')
    })

    it('TC02: mouse hover', () => {
        cy.visit('https://www.webdriveruniversity.com/Actions/index.html')
        //hover me first
        cy.get('[class="list-alert"]').first().should('not.be.visible')
        cy.get('[class="dropdown-content"]').first().invoke('show') //hover
        cy.get('[class="list-alert"]').first().should('be.visible')
        //hover me second
        cy.get('[class="list-alert"]').eq(1).should('not.be.visible')
        cy.get('[class="dropdown-content"]').eq(1).invoke('show') //hover
        cy.get('[class="list-alert"]').eq(1).should('be.visible')
          //hover me thisr
        cy.get('[class="list-alert"]').eq(2).should('not.be.visible')
        cy.get('[class="dropdown-content"]').eq(2).invoke('show') //hover
        cy.get('[class="list-alert"]').eq(2).should('be.visible')
         cy.get('[class="list-alert"]').eq(3).should('be.visible')
    })

    it('TC03: mouse db click', () => {
        cy.visit('https://www.webdriveruniversity.com/Actions/index.html')
        cy.get('#double-click').should('not.have.class','double')
        cy.get('#double-click').trigger('dblclick', {button : 1}).should('have.class','double')
        
    })

     it('TC04: mouse click and hold', () => {
        cy.visit('https://www.webdriveruniversity.com/Actions/index.html')
        cy.get('#click-box').trigger('mousedown',{button : 1}).should('have.text','Well done! keep holding that click now.....')
        cy.get('#click-box').trigger('mouseup',{button : 1}).should('have.text','Dont release me!!!')
        
    })
})