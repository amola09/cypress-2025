/// <reference types = "cypress" />

const xmltojs = require("xml2js")
const parser = new xmltojs.Parser({ explicitArray: false })

describe('TC001: Verify SOAP API testing in cypress:', function () {
    it("verify Celsius to Fahrenheit conversionn", () => {
    const CTFData = '<?xml version="1.0" encoding="utf-8"?><soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"><soap12:Body><CelsiusToFahrenheit xmlns="https://www.w3schools.com/xml/"><Celsius>98</Celsius></CelsiusToFahrenheit></soap12:Body></soap12:Envelope>'
        let Auth_Head = {
            "Content-Type": "application/soap+xml",
            "accept": "*/*"
        }
        cy.request({url : 'https://www.w3schools.com/xml/tempconvert.asmx',
            method : 'POST',
            body : CTFData,
            headers : Auth_Head
        }).then((response) => {
            // cy.log(response)
            expect(response.status).to.eq(200)
            expect(response.body).to.include('Fahrenheit')
            parser.parseString(response.body, (err, result) => {
                if (err) {
                    throw err
                }
                cy.log(result)
               expect(result['soap12:Envelope']['soap12:Body']['CelsiusToFahrenheitResponse']['CelsiusToFahrenheitResult']).to.eq('208.4')
            })
        })
    })
    
})