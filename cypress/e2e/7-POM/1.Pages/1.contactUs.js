
export default class myPage{

    selectors={
        url:"https://www.webdriveruniversity.com/Contact-Us/contactus.html",
        firstNameCss: '[name="first_name"]',
        lastNameCss: '[name="last_name"]',
        emailCss:'[name="email"]',
        msgCss:'[name="message"]' ,
        submitBtnCss:'[type="submit"]',

        //Assertion:
        sucessfullCss: 'h1',
        successMsg : 'Thank You for your Message!'
    }
    visitUrl(){
       cy.visit(this.selectors.url)
    }
     contactUsPage(userData){
        cy.get(this.selectors.firstNameCss).type(userData.fn)
        cy.get(this.selectors.lastNameCss).type(userData.ln)
        cy.get(this.selectors.emailCss).type(userData.email)
        cy.get(this.selectors.msgCss).type(userData.msg)
        cy.get(this.selectors.submitBtnCss).click()
        cy.get(this.selectors.sucessfullCss).should('have.text',this.selectors.successMsg)
    }

}