///<reference types='cypress' />

describe('TC09: Verify dropdown in cypress on webuniversity:', () => {

    it('TC001: static drop down :', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

        cy.get('#dropdowm-menu-1').select('C#')
        cy.get('#dropdowm-menu-2').select('TestNG')
        cy.get('#dropdowm-menu-3').select('HTML')
    })
    it('TC002: auto suggestive drop down:', () => {
        cy.visit('https://www.webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('#myInput').type('a')
        cy.get('#myInputautocomplete-list > div').each((el,indx)=>{
            //cy.log(el.text())
            if(el.text()== 'Almond'){
                cy.wrap(el).click()
                cy.get('#submit-button').click()
                cy.url().should('contain','Almond')
            }
        })
    })
    it.only('TC003: static drop down loop:', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        let optionsToSelect = ["SQL","TestNG","JavaScript","Pear"]
        cy.get('.dropdown-menu-lists').each((el,idx)=>{
            cy.wrap(el).select(optionsToSelect[idx])

        })
    })
}) 