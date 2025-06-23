///<reference types="cypress"/>

describe('TC28: Verify datepicker in cypress:',function(){
    it('TC001: Verify datepicker:',function(){
       let todaysDate = new Date()
    cy.log(`current date is  ${todaysDate}`)

    let dateonly = todaysDate.getDate()
    cy.log(`current date is  ${dateonly}`)

    let monthOnly = todaysDate.getMonth() //index and starts with 0
    cy.log(`current month is  ${monthOnly + 1}`)


    let monthShort = todaysDate.toLocaleString("default", { month: "short" })
    cy.log(`current month is  ${monthShort}`)
    let monthLong = todaysDate.toLocaleString("default", { month: "long" })
    cy.log(`current month is  ${monthLong}`)

    let yearOnly = todaysDate.getFullYear()
    cy.log(`current month is  ${yearOnly}`)
  })


  it.only("verify date picker in cypress", () => {
    let todaysDate = new Date()
    cy.log(`current date is  ${todaysDate}`)

    let dateonly = todaysDate.getDate()
    cy.log(`current date is  ${dateonly}`)

    let monthOnly = todaysDate.getMonth() //index and starts with 0
    cy.log(`current month is  ${monthOnly + 1}`)


    let monthShort = todaysDate.toLocaleString("default", { month: "short" })
    cy.log(`current month is  ${monthShort}`)
    let monthLong = todaysDate.toLocaleString("default", { month: "long" })
    cy.log(`current month is  ${monthLong}`)

    let yearOnly = todaysDate.getFullYear()
    cy.log(`current month is  ${yearOnly}`)


    todaysDate.setDate(todaysDate.getDate() + 365)
    let dateonlyF = todaysDate.getDate()
    cy.log(`current date is  ${dateonlyF}`)

    let monthOnlyF = todaysDate.getMonth() //index and starts with 0
    cy.log(`current month is  ${monthOnlyF + 1}`)


    let monthShortF = todaysDate.toLocaleString("default", { month: "short" })
    cy.log(`current month is  ${monthShortF}`)
    let monthLongF = todaysDate.toLocaleString("default", { month: "long" })
    cy.log(`current month is  ${monthLongF}`)

    let yearOnlyF = todaysDate.getFullYear()
    cy.log(`current month is  ${yearOnlyF}`)


    //date selection

    cy.visit('https://webdriveruniversity.com/Datepicker/index.html')

    cy.get('[class="input-group-addon"]').click()

    function selectMonthYear() {
      cy.get('[class="datepicker-switch"]').first().then((currentDate) => {
        if (!currentDate.text().includes(yearOnlyF)) {
          cy.get('[class="next"]').first().click()
          selectMonthYear()
        }
      }).then(() => {
        cy.get('[class="datepicker-switch"]').first().then((currentDate) => {
          if (!currentDate.text().includes(monthLongF)) {
            cy.get('[class="next"]').first().click()
            selectMonthYear()
          }
        })

      })
    }

    function selectDate() {
      cy.get('[class="day"]').contains(dateonlyF).click()
    }
    selectMonthYear()
    selectDate()

  })
})