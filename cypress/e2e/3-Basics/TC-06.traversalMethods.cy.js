///<reference types = 'cypress' />

describe("TC06: Verify traverse methods on Webdriver unicersity:",function(){
    beforeEach(function(){
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
    })

    it('TC001: Basic traverse methods:',function(){
        cy.get('.traversal-drinks-list  > li').should('have.length',5)

        cy.get('.traversal-drinks-list  > li').first().should('have.text', 'Coffee')
        cy.get('.traversal-drinks-list  > li').eq(1).should('have.text', 'Tea')
        cy.get('.traversal-drinks-list  > li').eq(2).should('have.text', 'Milk')
        cy.get('.traversal-drinks-list  > li').last().should('have.text', 'Sugar')
        cy.get('.traversal-drinks-list > li:nth-child(1)').should('have.text', 'Coffee')
        cy.get('.traversal-drinks-list > li:nth-child(3)').should('have.text', 'Milk')
    })

    it('TC002: Sibling methods:',function(){
        cy.get('#veggie').prev().should('have.text', 'Figs')
        cy.get('#veggie').next().should('have.text', 'Asparagus')
        cy.get('#milk').prev().should('have.text', 'Tea')
        cy.get('#milk').next().should('have.text', 'Espresso')

        cy.get('#veggie').prevAll().should('have.length', 6)
        cy.get('#veggie').nextAll().should('have.length', 4)

        cy.get('#espresso').prevUntil('#coffee').should('have.length', 2)

        cy.get('#coffee').nextUntil('#espresso').should('have.length', 2)
    })

    it('TC003:find method:',function(){
        cy.get('#form-textfield').find('[name="firstname"]').type('Amol')
        cy.get('#form-textfield').find('[name="lastname"]').type('deshmukh')
        cy.get('#form-textfield').find('textarea').type('hello')
    })
    it('TC004:contains method:',function(){
        cy.get('.traversal-buttons').contains('Link').click()
    })

    it('TC005:contains-2 method:',function(){
        cy.visit('https://www.webdriveruniversity.com/')
        cy.contains('CONTACT US').click()
        //cy.get('#contact-us > div >div.section-title > h1').click()
    })

    it('TC006:Parent,Parents,parentsUntill Method:',function(){
        cy.get('#espresso').parent().should('have.attr', 'class', 'traversal-drinks-list')

        cy.get('#espresso').parents().should('have.length', 6)

        cy.get('#espresso').parentsUntil('body > div.container').should('have.length', 3)
    })

    it('TC006:children,filter,not Method:',function(){
        cy.get('.traversal-button-states').children().should('have.length',4)
        cy.get('.traversal-button-states').children().filter('.disabled').should('have.text','Warning')

        cy.get('.traversal-button-states').children().not('.disabled').should('have.length',3)

    })

    it('TC006:Closest Method:',function(){
        cy.get('.disabled').closest('div').should('have.attr', 'class', 'traversal-button-states')
        cy.get('[aria-label="Page navigation example"]').closest('nav').should('have.attr', 'aria-label', 'Page navigation example')
        cy.get('.traversal-button-states').closest('div').should('have.attr', 'class', 'traversal-button-states')
    })




})