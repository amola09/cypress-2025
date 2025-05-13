///<reference types='cypress' />

describe('TC07: Verify traverse methods on flipkart:',function(){
    it.only('TC001: Verify flipkart add to cart', function() {
        cy.visit('https://www.flipkart.com/')
        cy.get('input[title="Search for Products, Brands and More"]').type('bag {enter}')
        cy.get('[class="BUOuZu"] > span').should('contain','bag')
        
    })
})