///<reference types="cypress"/>

describe('TC01: Verify network request in cypress',function(){
    it('TC001: Verify cy.itercept() on cypress.io:',function(){
       cy.visit('https://example.cypress.io/commands/network-requests')

       cy.intercept({
        url:'https://jsonplaceholder.cypress.io/comments/1',
        method:'GET'
       }).as('getcomment')
       
       cy.get('.btn-primary').click()
     // cy.contains('Get Comment').click()
      cy.wait('@getcomment').then((res)=>{
       // cy.log(res)
        cy.log(res.response.body.body)
        cy.log(res.response.body.email)
        cy.log(res.response.body.id)
         cy.log(res.response.statusCode)

         cy.get('[class="network-comment"]').should('have.text',res.response.body.body)

      })
      cy.get('[class="network-comment"]').should('contain','laudantium enim quasi')
    })
})

//1. describe block -> it block-> get comment button from UI click on same with cy.contains()
//2. cy.intercept -> url , method comibine it with alias as'getcomment'
//3. cy.wait('@getcomment') .then((res)=>{}) -> cy.log(res)
//4.  assertion 1. after wait block UI element -> should('contain','') 2. inside wait block UI elementshould('have.text',res)
