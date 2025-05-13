///<reference types="cypress"/>

describe('TC11: Verify dropdown functionality from bootstrap:',function(){
    it('TC001: Verify dropdown: ', function(){
        cy.visit('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')
        cy.get('.multiselect-selected-text').click()

        // print and count courses
        cy.get('ul > li >a > label').each(el=>{
            cy.log(el.text())
        })
        cy.get('ul > li >a > label').should('have.length',14)
       
       // print and count courses
        cy.get('ul > li >a > label.checkbox').each(el=>{ //Find all checkboxes inside a list (<ul> → <li> → <a> → <label>).
            cy.log(el.text())   // print all checkboxes inside a list (<ul> → <li> → <a> → <label>).
        })
        cy.get('ul > li >a > label.checkbox').should('have.length', 11)
    
    // count and print only single check box
   // Find all checkboxes inside a list (<ul> → <li> → <a> → <label>).
    cy.get('ul > li >a > label.checkbox').each(el=>{        //Loop through each checkbox using .each().
        if(el.text() =='C#'){     //Check the text of the checkbox label. check and Click the checkbox if its text matches " C#".
          cy.wrap(el).click()     //Converts the plain DOM element (el) into a Cypress-wrapped element so we can use Cypress commands (like .click()).
        }
    })
       
    let optionsToSelect = [" Java"," Python"," C#"," Oracle"]
    cy.get('ul > li > a > label.checkbox').each(el=>{
        if(optionsToSelect.includes(el.text())){
            cy.wrap(el).click()
        }
    })
    // check options from list which are not checked
    cy.get('ul > li > a > label.checkbox').each(el=>{
        cy.wrap(el).find('input').then(checkbox=>{
            if(!(checkbox.is(':checked'))){
                cy.wrap(el).click()
            }
        })
    })
    // uncheck all options from list
    cy.get('ul > li > a > label.checkbox').each(el=>{
        cy.wrap(el).find('input').then(checkbox=>{
            if((checkbox.is(':checked'))){
                cy.wrap(el).click()
            }
        })
    })
    
    })
    
})