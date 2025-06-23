///<reference types = "cypress" />

describe('TC17: Verify multiple Iframes in cypress:',function(){
    it('TC001: Verify multiple Iframes on webdriver:',function(){

        cy.visit('https://ui.vision/demo/webtest/frames/')

        cy.get('frame').should('have.length',5) // to check length of frames

        cy.iframe('[src="frame_1.html"]').find('input[name="mytext1"]').type("amol") // Interact with frame 1
        cy.wait(3000)
       //cy.iframe('[src="frame_3.html"]').find('[name="mytest3"]').type("amola") 
        
       cy.iframe('[src="frame_3.html"]').then($parentframe=>{ // handle nested iframe in frame 3
        cy.wait(3000)
        cy.wrap($parentframe).find('iframe').wait(2000).then($childframe=>{
            cy.wait(2000)
            //cy.log($childframe)
            const childFrameBody = $childframe[0].contentDocument.body
            cy.wrap(childFrameBody).find('[id="i6"]').click()
        })
       })

    })
    it('TC002: example-3',function(){
        cy.visit('https://ui.vision/demo/webtest/frames/')

        // count of frames
       cy.get('frame').should('have.length',5)

       cy.getiFrameBody('[src="frame_1.html"]').find('input[name="mytext1"]').type("amol")
       cy.getiFrameBody('[src="frame_3.html"]').then($parentBody=>{
        cy.wrap($parentBody).find('iframe').then($childframe=>{
            const childBody = $childframe[0].contentDocument.body
            cy.wrap(childBody).find('[id="i6"]').click()
            
        })
       })
    })
})
