///<reference types = "cypress" />

describe('TC17: Verify table data in cypress:',function(){
  function calculateAge(tableId, totalSum) {
    let sum = 0
    cy.get(`${tableId} > tbody >tr`).not(':first').each((rows) => {
      sum += Number(rows.find('td').last().text())
    }).then(() => {
      //cy.log(sum)
      expect(sum).to.eq(totalSum)
    })
  }

  it('TC001: Verify table 1 in cypress', () => {
    cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')

    let sum = 0
    cy.get('#t01 > tbody >tr').not(':first').each((rows) => {
      //select 2nd column data
      //cy.log(rows.find('td').eq(1).text())

      //print all column data
      // cy.wrap(rows).find('td').each(td=>{
      //   cy.log(td.text())
      // })

      sum += Number(rows.find('td').last().text())
    }).then(() => {
      //cy.log(sum)
      expect(sum).to.eq(159)
    })
  })

  it('TC002: Verify table 1 in cypress', () => {
    cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')

    let sum = 0
    cy.get('#t02 > tbody >tr').not(':first').each((rows) => {
      //select 2nd column data
      //cy.log(rows.find('td').eq(1).text())

      //print all column data
      // cy.wrap(rows).find('td').each(td=>{
      //   cy.log(td.text())
      // })

      sum += Number(rows.find('td').last().text())
    }).then(() => {
      //cy.log(sum)
      expect(sum).to.eq(163)
    })

  })

  it('TC003: Verify table 2 in cypress with function', () => {
    cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
    calculateAge('#t02', 163)
    calculateAge('#t01', 159)
  })
})

