/// <reference types="cypress" />

import HomePage from  "../../../pages/HomePage"
import SuperBaseClass from "../../../wrappers/SuperBaseClass"
import BaseClass from "../../../wrappers/BaseClass"
import PageOne from "../../../pages/PageOne"
import PageTwo from "../../../pages/PageTwo"
import SingletonCall from "../../../singleton-test/SingletonCall"


const homePage = new HomePage()
const singletonObject = new SingletonCall()



describe("Launch Web Application For Testing",()=>{
    before("Launch Web Application",()=>{
        cy.visit('/')
    })
    beforeEach("Object intlization",()=>{
        singletonObject.initializationObject()
    })

    it("Verify Application  Launch Scuuceffully or not", function(){
        homePage.verifyPage()
        homePage.verifyLogoOnHomePage()
    })
})

