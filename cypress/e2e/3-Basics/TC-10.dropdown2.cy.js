///<reference types='cypress' />

describe('TC10: Verify dropdown in cypress:', () => {

    it('TC001: static drop down:', () => {
        cy.visit('https://www.primevideo.com/offers/nonprimehomepage/ref=atv_dl_rdr')
        //cy.get('[aria-label="Search Prime Video"]').eq(0).click()
         cy.get('[aria-label="Search Prime Video"]').eq(0)
         cy.get('input#pv-search-nav').type('chor')
         cy.get('ol > li > a').each((el, idx)=>{
            //cy.log(el.text())
            if(el.text()=='chor machaye shor'){
                cy.wrap(el).click()
            }
        })
        cy.contains('Results for "chor machaye shor".').should('be.visible')
       
        
    })
})