///<reference types ="cypress"/>

describe("TC13: Verify Hidden dropdown in cypress:",function(){
    it("TC001: Verify hidden dopdown in orangeHRM:",function(){

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('[placeholder="Username"]').type('Admin')
        cy.get('[placeholder="Password"]').type('admin123')
        cy.get('[type="submit"]').click()

        cy.contains('PIM').click()

        // click on employment status
        // unable to inspect when we try select dropdown 2nd option
        //https://selectorshub.com/selectorshub/
        cy.get('[class="oxd-select-text--after"]').eq(2).click()
        
        cy.get('[role="listbox"] > [role="option"] >span').each(el=>{
            // to check text of all elements
            //cy.log(el.text())
            if(el.text()=='IT Manager'){
                cy.wrap(el).click()
            }

        })
    })
})