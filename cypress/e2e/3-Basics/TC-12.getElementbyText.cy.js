///<reference types='cypress' />

// Type -1 - invoke
describe("TC12: get text of element in cypress:", function () {
  it.skip("TC001:get element text from google: ", function () {
    cy.visit("https://www.google.co.in/");

    cy.get('[rel="nofollow"]').invoke("text").then((txt) => {
        cy.log(txt);
      });
  });

  // type-2 .then
  it.skip("TC002: Get text of element from redbus.in:", () => {
    cy.visit("https://www.redbus.in/");
    cy.get('[class="OfferSection__OfferHeadText-sc-16xojcc-0 gHimHf"]').then((selector) => {
        cy.log(selector.text());
      }
    );
  });
  // type -3  jquery method
  it("TC003: Get element text from webdriveruniversity:", function () {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get("div.caption>h4").eq(2).then(($selector) => {
        // get DOM elemet and the eq index 2 text
        cy.log($selector.text());
      });
  });
  //Type-4 invoke expect
  it("TC004: Get element text from letskodit:", function () {
    cy.visit("https://www.letskodeit.com/practice");
    cy.get('[data-uniqid="1621702280245"]').should("have.text","Practice Page");
    cy.get('[data-uniqid="1621702280245"]').invoke("text").then((elementText) => {
        expect(elementText).to.eq("Practice Page");
    });
  });
});
