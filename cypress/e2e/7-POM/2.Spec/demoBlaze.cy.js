/// <reference types = "cypress" />
import homePage from "../1.Pages/2.demoblaze"
import userCred from "../../../fixtures/demoBlazeUser.json"
//import demoProd from "../../../fixtures/demoblazeProduct.json"
describe('shopping',()=>{
    const hp = new homePage()
    it("my first shopping",()=>{
        hp.visitUrl()
       hp.login(userCred.un,userCred.pw)
    })
})