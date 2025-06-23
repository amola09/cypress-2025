///<reference types="cypress"/>
describe('TC16: Verify Iframe in cypress:',function(){
   it('TC001: Verify Iframe from webdriver approach-1:',function(){
    cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')

    cy.get('#frame').then(function(el){
        cy.log(el)
        let iFrameBody = el.contents().find('body')
        cy.wrap(iFrameBody).as('iframe')
            cy.get('@iframe').find('[href="index.html"]').should('have.text', 'Home')
            cy.get('@iframe').find('[href="products.html"]').should('have.text', 'Our Products')
    })
   })
   it('TC002: Verify Iframe from webdriver approach-2:',function(){
    cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')

    cy.get('#frame').then(function ($frame) {
        cy.log($frame)
        let iFrameBody = $frame.contents().find('body')
        cy.wrap(iFrameBody).as('iframe')
        cy.get('@iframe').find('[href="index.html"]').should('have.text', 'Home')
        cy.get('@iframe').find('[href="products.html"]').should('have.text', 'Our Products')
    })

   })
   it('TC003: Verify Iframe from webdriver approach-3:',function(){
    cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')

    cy.get('#frame').then(function (frame) {
        //cy.log(frame)
        let iFrameBody = frame[0].contentDocument.body
        cy.wrap(iFrameBody).as('iframe')
        cy.get('@iframe').find('[href="index.html"]').should('have.text', 'Home')
        cy.get('@iframe').find('[href="products.html"]').should('have.text', 'Our Products')
    })
   })
   it('TC004: Verify Iframe from webdriver approach-4:',function(){
    cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')

        let iframeBody = cy.get('#frame').its('0.contentDocument.body').then(cy.wrap)
        //iframeBody.find('[href="index.html"]').should('have.text', 'Home')
        //cy.wait(2000)
        //iframeBody.find('a[href="products.html"]').should('have.text', 'Our Products')
        iframeBody.find('p[class="sub-heading"]').first().should('have.text', 'Who Are We?')
   })
   it('TC005: Verify Iframe from webdriver approach-5', () => {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')

        cy.iframe('#frame').find('p[class="sub-heading"]').first().should('have.text', 'Who Are We?')
        cy.iframe('#frame').find('[href="index.html"]').should('have.text', 'Home')
        cy.iframe('#frame').find('a[href="products.html"]').should('have.text', 'Our Products')
    })
})