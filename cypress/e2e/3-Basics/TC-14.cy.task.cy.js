///<reference types ="cypress"/>

describe('TC14: Verify task functionality in cypress:',function(){
    it('TC001: Verify Cy.task():',function(){

        cy.task('myTask1')
        cy.task('myTask2','Amola')
        cy.task('addition',{a:10,b:5}).then(sum=>{
            cy.log(sum)
        })

    })
})