class HomePage {

    constructor() {
    }

    verifyPage(){
        cy.url().should('include','/index.php')
    }
    
    verifyLogoOnHomePage() {
        cy.get('#header_logo a img').should('be.visible')
    }

    clickOnSignInButton(){
        cy.get('.login').should('be.visible').click()
    }

}

export default HomePage
