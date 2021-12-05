class LoginPage{

    verifyPage(){
        cy.url().should('include','index.php?controller=authentication&back=my-account')
    }

    userLogin(userEmail, userPassword){
        cy.get('#email').should('be.visible').clear().type(userEmail)
        cy.get('[type="password"]').should('be.visible').clear().type(userPassword)
        cy.get('#SubmitLogin').should('be.visible').click()
    }

    verifyLoginUser(loggedInUser){
        cy.get('.account span').should('be.visible').contains(loggedInUser)
    }

}

export default LoginPage