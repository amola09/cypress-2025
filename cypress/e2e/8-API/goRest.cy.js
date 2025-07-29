///<reference types = "cypress"/>
//primary token = abb30cb9e5fae3937f565c182ef54b5ff4150f09c0ccd892790ab44921e79f38

import postData from '../../fixtures/gorest-api'
describe("TC001: Verify API testing in cypress:", function () {
  const token =
    "Bearer abb30cb9e5fae3937f565c182ef54b5ff4150f09c0ccd892790ab44921e79f38";
  it("TC001: Verify API from gorest for GET request:", function () {
    cy.request(
      {
        url: "https://gorest.co.in/public/v2/users",
        method: "GET",
      },
      (Headers = {
        Authorization: "token",
      })
    ).then((getResponse) => {
      cy.log(getResponse);
      
      cy.log(getResponse.body[0]);
    //   expect(getResponse.body[0].name).to.eq("Dhananjay Bhat");
    //   expect(getResponse.body[1].id).to.eq(7978077);
    //   expect(getResponse.body[3].email).to.eq("abbott_bhaswar@smith.test");
    //   expect(getResponse.status).to.eq(200)
      expect(getResponse.statusText).to.eq('OK')
    });
  });
  postData.forEach((el, ind) => {
    it(`TC002: Verify API from gorest for POST request user ${el.name}:`, function () {
     // const requestPayload = {
    //     name: "Amol",
    //     gender: "male",
    //     email: `amola${Date.now()}@gmail.com`,
    //     status: "active",
    //   };
      //    const requestPayload = {
      //     "email":"amola_" + Math.floor(Math.random() * 10000) + "@15ce.com",
      //     "name":"Amol",
      //     "gender":"male",
      //     "status":"active"}

      cy.request({
        url: "https://gorest.co.in/public/v2/users",
        method: "POST",
        body: el,
        headers: {
          Authorization: token,
        },
      }).then((postResponse) => {
        cy.log(postResponse);
        expect(postResponse.body.name).to.eq(el.name);
      });
    });
  });

  it(`TC003: Verify API from gorest for PUT request :`, function () {
     const requestPayload = {
        name: "Amol",
        gender: "male",
        email: `amola${Date.now()}@gmail.com`,
        status: "active",
      };
      cy.log(requestPayload)
    cy.request({
        url:"https://gorest.co.in/public/v2/users/7979036",// here we used last id from post data response created object
        method:'PUT',
        body:requestPayload,
        headers:{Authorization:token}
    }).then((putResponse)=>{
        cy.log(putResponse)
    })
  })
 
  
  it.only('TC004: Verify API from gorest for PUT request :',function(){
    cy.request({
            url: 'https://gorest.co.in/public/v2/users/7978079',
            method: "DELETE",
            headers: { Authorization: token },
        }).then((deleteResponse)=>{
            cy.log(deleteResponse)
            expect(deleteResponse.body).to.eq("")
            expect(deleteResponse.status).to.eq(204)
            expect(deleteResponse.statusText).to.eq('No Content')
        })
  })
  

});
