///<reference types= "cypress" />

// verify contact us page from webdriveruniversity

describe.skip("TT01:Verify contact us page from webdriveruniversity:", function () {
  it("TC001: Verify contactUS page for valid data:", function () {
    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");

    cy.get('[placeholder="First Name"]').type("Amol");
    cy.get('[placeholder="Last Name"]').type("Pawar");
    cy.get('[placeholder="Email Address"]').type("amolpawar@gmail.com");
    cy.get('[placeholder="Comments"]').type("I learn cypress");
    cy.get('[type="submit"]').click();

    cy.get("h1").should("have.text", "Thank You for your Message!");
  });
  it("TC002: Verify contactUS page for valid data2:", function () {
    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");

    cy.get('[name="first_name"]').type("Amol");
    cy.get('[name="last_name"]').type("Deshmukh");
    cy.get('[name="email"]').type("amoldeshmukh@gmail.com");
    cy.get('[name="message"]').type("I learn Cypress");
    cy.get('[value="SUBMIT"]').click();

    cy.get("h1").should("have.text", "Thank You for your Message!");
  });
  it("TC003: Verify contactUS page for invalid data:", function () {
    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");

    cy.get('[name="first_name"]').type("Amol");
    cy.get('[name="last_name"]').type("Deshmukh");
    cy.get('[name="email"]').type("amoldeshmukhl.com");
    cy.get('[name="message"]').type("I learn Cypress");
    cy.get('[value="SUBMIT"]').click();

    cy.contains("Error: Invalid email address");
  });
  it("TC004: Verify contactUS page for invalid data2(RESET):", function () {
    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");

    cy.get('[name="first_name"]').type("Amol");
    cy.get('[name="last_name"]').type("Deshmukh");
    cy.get('[name="email"]').type("amoldeshmukh@gmail.com");
    cy.get('[name="message"]').type("I learn Cypress");
    cy.get('[value="RESET"]').click();

    cy.get('[name="first_name"]').should("have.text", "");
    cy.get('[name="last_name"]').should("have.text", "");
    cy.get('[name="email"]').should("have.text", "");
    cy.get('[name="message"]').should("have.text", "");
  });
});

// verify contact us page from webdriveruniversity

describe.skip("TT02:Verify login page from Saucedemo:", function () {
  it("TC001: Verify login page for valid data:", function () {
    cy.visit("https://www.saucedemo.com/");

    cy.get('[id="user-name"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");

    cy.get('[type="submit"]').click();

    cy.get('[class="title"]').should("have.text", "Products");
  });
  it("TC002: Verify login page for ivalid data:", function () {
    cy.visit("https://www.saucedemo.com/");

    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sace");

    cy.get('[type="submit"').click();

    cy.get("h3").should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
});

describe.skip("TC03: Verify login functionality on OrangeHRM:", function () {
  it("TC001: Verify Login functionality for valid data:", function () {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("admin123");
    cy.get('[type="submit"]').click();

    cy.get("h6").should("have.text", "Dashboard");
  });
  it("TC002: Verify Login functionality for invalid data:", function () {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("admn123");
    cy.get('[type="submit"]').click();

    cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should(
      "have.text",
      "Invalid credentials"
    );
  });
});

describe.skip("TC04: Verfiy login functionality on PARABANK:", function () {

  it("TC001: Verify login funcitionality with valid data:", function () {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm;jsessionid=9370E628EF9C1AA397A6EC021D29F2C9");

    cy.get('[name="username"]').type("amold");
    cy.get('[name="password"]').type("amol123");
    cy.get('[type="submit"]').click();

    cy.get("p.smallText").should("have.text", "Welcome Amol Deshmukh")
    cy.contains("*Balance includes deposits that may be subject to holds").should("be.visible");
    cy.url().should("include", "parabank/overview.htm");
  });
  it("TC002: Verify login funcitionality with invalid data:", function () {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm;jsessionid=9370E628EF9C1AA397A6EC021D29F2C9");

    cy.get('[name="username"]').type("amold");
    cy.get('[name="password"]').type("amol12");
    cy.get('[type="submit"]').click();

    cy.get("h1.title").should("have.text", "Error!")
    cy.contains("The username and password could not be verified.").should("be.visible");
    cy.url().should("include", "parabank/login.htm");
  });
});

describe.skip('TC05: Verify login functionality on herokuapp:',function(){
  it('TC001: Verify login with valid data:',function(){
    
    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('[type="submit"]').click()

    cy.get('h2').should('have.text',' Secure Area')
    cy.contains('Welcome to the Secure Area. When you are done click logout below.').should('be.visible')
    cy.url().should('include','/secure')
    

  })

  it('TC002: Verify login with invalid data:',function(){
    
    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('[type="submit"]').click()

    cy.get('h2').should('have.text',' Secure Area')
    cy.contains('Welcome to the Secure Area. When you are done click logout below.').should('be.visible')
    cy.url().should('include','/secure')
  })
})

describe('TC06: Verify login functionality automation excercise:',function(){
  it('TC001: Verify login functionality with valid data',function(){
    cy.visit('https://automationexercise.com/')

    cy.get('[data-qa="signup-email"]').type('AmolPawar@gmail.com')
    cy.get('[data-qa="login-password"]').type('amol@123')
    cy.get('[type="submit"]').click()

    cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10) > a > i').should('have.text',' Logged in as ')
    cy.contains('Category').should('be.visible')
    cy.url().should('include','https://automationexercise.com/')
  })
  it('TC002: Verify login functionality with invalid data',function(){
    cy.visit('https://automationexercise.com/')

    cy.get('[type="email"]').type('AmolPawar@gmail.com')
    cy.get('[type="password"]').eq(1).type('amol@23')
    cy.get('[type="submit"]').eq(1).click()

    cy.get('#form > div > div > div.col-sm-4.col-sm-offset-1 > div.login-form > form > p').should('have.text','Your email or password is incorrect!')
    cy.contains('Your email or password is incorrect!').should('be.visible')
    cy.url().should('include','https://automationexercise.com/')
  })
})

