///<reference types ="cypress" />
import reqData from "../../fixtures/reqresData.json"

describe('TC01: Verify API testing in cypress:',function(){
    it('TC001: Verify API from reqres for GET request:',function(){
        cy.visit('https://reqres.in/')
        
        cy.request({
            url:'https://reqres.in/api/users?page=2',
            method:'GET'
        }).then((getResponse)=>{
            cy.log(getResponse)
            cy.log(getResponse.body)
            cy.log(getResponse.body.data)

            cy.log(getResponse.body.data[0].first_name)
            cy.log(getResponse.body.data[1].first_name)
            cy.log(getResponse.body.data[2].id)
           
            expect(getResponse.body.data[1].first_name).to.eq('Lindsay')
            expect(getResponse.body.data[2].id).to.eq(9)
            expect(getResponse.body.data[4].last_name).to.eq('Edwards')
            expect(getResponse.body.data[3].email).to.eq("byron.fields@reqres.in")
        
        })
    })
    it('TC002: Verify API from reqres for POST request:',function(){
      const payload ={
            "name": "morpheus",
            "job": "leader"
      }
        
        cy.request({
            url:'https://reqres.in/api/users',
            method:'POST',
            body:payload,
            headers:{
                "x-api-key": "reqres-free-v1"
            }
        }).then((postResponse)=>{
            cy.log(postResponse)
             expect(postResponse.body.name).to.eq(payload.name)
        })
    })
reqData.forEach((el)=>{
    it(`TC003: Verify API from reqres for POST request-2:${el.name}`,function(){
        cy.request({
            url:'https://reqres.in/api/users',
            method:'POST',
            body:el,
            headers:{
                  "x-api-key": "reqres-free-v1"
            }
        }).then((postResponse)=>{
            cy.log(postResponse)
             expect(postResponse.body.name).to.eq(el.name)
        })
    })
})
      it('TC004: Verify API from reqres for PUT request:',function(){
        const payload1 = {
            "name": "morpheus",
            "job": "zion resident"

        }
        cy.request({
           url:'https://reqres.in/api/users/2',
           method:'PUT',
           body:payload1,
           headers:{
             "x-api-key": "reqres-free-v1"
           }
        }).then((putResponse)=>{
             cy.log(putResponse)
            expect(putResponse.body.name).to.eq(payload1.name)
        })
    })

    it('TC005: Verify API from reqres for DELETE request:',function(){
      cy.request({
        url:'https://reqres.in/api/users/2',
        method:'DELETE',
        headers:{
            "x-api-key": "reqres-free-v1"
        }
      }).then((deleteResponse)=>{
        cy.log(deleteResponse)
        expect(deleteResponse.status).to.eq(204)
      })
    
    })

})



  
