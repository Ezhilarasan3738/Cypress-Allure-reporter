import User, * as Constant from "../../constants/constant"
import HomePageElement from "../../constants/constant"
class HomePage {

    constructor() {
    }

    verifyPage(){
        cy.url().should('include','/index.php')
    }
    
    verifyLogoOnHomePage() {
        cy.log(User.name)
        cy.get(HomePageElement.HEADERLOGO).should('be.visible')
    }

    clickOnSignInButton(){
        cy.get(HomePageElement.LOGINBUTTON).should('be.visible').click()
    }

}

export default HomePage
