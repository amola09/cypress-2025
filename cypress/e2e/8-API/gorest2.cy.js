///<reference types="cypress"/>
import postData from '../../fixtures/gorest-api'
describe('TC001: Verify API testing in cypress:',function(){
    const token ="Bearer abb30cb9e5fae3937f565c182ef54b5ff4150f09c0ccd892790ab44921e79f38"

    it("TC001: E2E API testing in cypress",function(){
        const requestPayload = { "name": "Amol", "gender": "male", "email": `amol${Date.now()}@gmail.com`, "status": "active" }
        const putPayload ={ "name": "Amol", "gender": "male", "email": `amol${Date.now()}@gmail.com`, "status": "active" }
        cy.request({
            url:'https://gorest.co.in/public/v2/users',
            method:'POST',
            body:requestPayload,
            headers:{Authorization:token}
        }).then((response)=>{
            // cy.log(response)
            // cy.log(response.body.id)
            expect(response.body.name).to.eq(requestPayload.name)
            return response.body.id
        }).then((userId) => {
            cy.request({
                url:`https://gorest.co.in/public/v2/users/${userId}`,
                method:'GET',
                headers:{Authorization:token}
            }).then((response)=>{
                // cy.log(response)
                expect(response.body.id).to.eq(userId)
                expect(response.body.name).to.eq(requestPayload.name)
            })

            cy.request({
                url:`https://gorest.co.in/public/v2/users/${userId}`,
                method:'PUT',
                body:putPayload,
                headers:{Authorization:token}
            }).then((response)=>{
                // cy.log(response)
                expect(response.body.name).to.eq(putPayload.name)
            })

            cy.request({
                url:`https://gorest.co.in/public/v2/users/${userId}`,
                method:'DELETE',
                headers:{Authorization:token}
            }).then((response)=>{
                // cy.log(response)
                expect(response.status).to.eq(204)
            })
        })
    })

})