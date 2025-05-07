///<reference types='cypress' />

describe('TC08: Verify radio buttons and check box in cypress', () => {

    it('TC001: Verify radio button', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
       cy.get('[value="green"]').should('not.be.checked')

       cy.get('[value="green"]').check().should('be.checked')

       cy.get('[value="blue"]').check().should('be.checked')

       cy.get('[value="green"]').should('not.be.checked')
       
    })

    it('TC002: Verify check box:', function() {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="option-3"]').should('be.checked')
        cy.get('[value="option-1"]').check().should('be.checked')
        cy.get('[value="option-1"]').check().should('be.checked')
        cy.get('[value="option-3"]').should('be.checked')
        cy.get('[value="option-4"]').check().should('be.checked')
        cy.get('[value="option-2"]').click().should('be.checked')
        cy.get('[value="option-2"]').click().should('not.be.checked')
    })
})