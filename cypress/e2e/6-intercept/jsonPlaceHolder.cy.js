///<reference types ="cypress" />

describe('TC03: Verify intercept with son n/w requests',function(){
    it('TC001: Verify GET request:',function(){
        cy.visit('https://jsonplaceholder.typicode.com/')

        cy.intercept({
            url:'https://jsonplaceholder.typicode.com/posts',
            method:'GET',
        }).as('GetReq')

        cy.get('a[href="/posts"]').first().click()
        cy.wait('@GetReq').then((res)=>{
            console.log(res)
            cy.log(res)
            console.log(res.response.body)
            console.log(res.response.headers)
            expect(res.response.statusCode).to.eq(200)
            expect(res.response.statusMessage).to.eq('OK')
        })
   })

 
    it('POST then GET then DELETE', function() {
       
        
        
   })
})