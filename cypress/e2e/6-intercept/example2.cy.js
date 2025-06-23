///<reference types ="cypress"/>

describe("TC02: Verify intercept in cypress example-2:",function(){
    it("TC001: Verify get comment in cypress:",function(){
       cy.visit('https://example.cypress.io/commands/network-requests')
       
       cy.intercept({
        url:'https://jsonplaceholder.cypress.io/comments/1',
        method:'GET'
       }, {
            body: 
            {
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "this is my mock response"
            }
        }).as('getComment')
       cy.contains('Get Comment').click()
       cy.wait('@getComment').then((res) => {
            cy.log(res.response.body)
            // cy.log(res.response.body.body)
            cy.get('[class="network-comment"]').should('have.text', res.response.body.body)
        })
    
    cy.get('[class="network-comment"]').should('contain', 'this is my mock response')
   
    
})
  it("TC002: Verify post comment in cypress:",function(){
       cy.visit('https://example.cypress.io/commands/network-requests')
       
       cy.intercept({
        url:'https://jsonplaceholder.cypress.io/comments',
        method:'POST'
       
        }).as('postComment')
       cy.contains('Post Comment').click()
       cy.wait('@postComment').then((res) => {
             expect(res.response.body.body).to.eq("You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE")
            expect(res.response.statusCode).to.eq(201)
            expect(res.response.statusMessage).to.eq("Created")
        })
    })
     it("TC003: Verify update comment in cypress:", () => {

        cy.visit('https://example.cypress.io/commands/network-requests')

        cy.intercept({
            url:'https://jsonplaceholder.cypress.io/comments/1',
            method : 'PUT'
        }).as('updateComment')

        cy.contains('Update Comment').click()
        cy.wait('@updateComment').then((res)=>{
            cy.log(res)
            expect(res.response.body.name).to.eq("Using PUT in cy.intercept()")
            expect(res.response.statusCode).to.eq(200)
        })


       })

    })