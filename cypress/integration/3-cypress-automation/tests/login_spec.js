///<reference types="cypress"/>

import HomePage from "../../../pages/HomePage"
import LoginPage from "../../../pages/LoginPage"

const homePage = new HomePage()
const loginPage = new LoginPage()

describe("Login Scenarios Test Creation", () => {
    before("Launch Web Application", function () {
        cy.visit('/')
        homePage.clickOnSignInButton()
        cy.fixture('userLogin').then((userRecords) => {
            this.userRecords = userRecords
        })
    })

    it("Login Funcationality and Verify Logged In User Update", function () {
        loginPage.verifyPage()
        loginPage.userLogin(this.userRecords.Email, this.userRecords.Password)
        loginPage.verifyLoginUser(this.userRecords.UserName)
    })

   
})