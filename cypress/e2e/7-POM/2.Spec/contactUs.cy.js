//POM (Page Object Model) in cypress is a design pattern used to create an object repository for web elements.
//It helps in maintaining, scaling, and reusing test automation code by separating the test logic from the page structure.

///<reference types = "cypress" />
import homePage from "../1.Pages/1.contactUs"
import userData from "../../../fixtures/fixdata_1.json"
import userData2 from "../../../fixtures/fixdata_2.json"

describe("TC01: Verify contact us page using pom design pattern:", () => {
    let hp = new homePage()
    it("TC001: Verify contact us from fixData_1 ", () => {
        hp.visitUrl()
        hp.contactUsPage(userData)
    })

    userData2.forEach((el) => {
        it(`TC002: Verify contact us from fixData_2 for user ${el.fn}`, () => {
            hp.visitUrl()
            hp.contactUsPage(el)
        })
    })
})