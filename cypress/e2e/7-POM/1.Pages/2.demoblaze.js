export default class myClass{

    selectors = {
        url:'https://www.demoblaze.com/',
        // new User
        newUserSignUpBtn : '[id="signin2"]',
        newUserName :"#sign-username",
        newUserPassword : '#sign-password',
        newUserSignUpBtn2 : '[onclick="register()"]',


        //existing user
        userLoginBtnCss: '#login2',
        userNameCss: '[id="loginusername"]',
        userPasswordCss: '[id="loginpassword"]',
        submitBtnCss: '[onclick="logIn()"]',

        // Verify login
        logoutBtn : '#logout2',
        nameOfUser : '#nameofuser'


    }
       visitUrl(){
        cy.visit(this.selectors.url)
    }

    login(un,pw){
        cy.get(this.selectors.userLoginBtnCss).click()
        cy.get(this.selectors.userNameCss).clear().type(un)
        cy.get(this.selectors.userPasswordCss).type(pw)
        cy.get(this.selectors.submitBtnCss).click()
        cy.get(this.selectors.logoutBtn).should('be.visible')
        cy.get(this.selectors.nameOfUser).should('contain',un)
    }

}