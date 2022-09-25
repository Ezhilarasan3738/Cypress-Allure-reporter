///<reference types="cypress"/>

describe("Google Search test scenario", () => {
    before("Launch Google Home Page", function () {
        cy.visit('https://www.google.com/')
    })

    it("Search with test keywords in Google", function () {
        cy.get('[title="Search"]').should('be.visible').click().type('Test')
        // cy.get('.FPdoLc input[value="Google Search"]').click()
        cy.get('.lJ9FBc[jsname="VlcLAe"] input[value="Google Search"]').should('be.visible').click()

    })
})