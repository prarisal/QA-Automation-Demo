import { faker } from '@faker-js/faker';
import Register from "../../pageObject/Registerpage/register.page";
import Dashboard from "../../pageObject/Dashboard/dashboard.page"

const testFirstName = faker.person.firstName()
const testLastName = faker.person.lastName()
const testEmail = faker.internet.email()
const adminEmail = Cypress.env('adminEmail')
const adminPw = Cypress.env('adminPw')

describe("Register", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should not register with empty fields", () => {
    Register.registerPage.click();
    Register.btnRegister.click();

    cy.contains("First name required").should("exist");
    cy.contains("Last name required").should("exist");
    cy.contains("Email is required").should("exist");
    cy.contains("Password is required").should("exist");
  });

  it("should register an account", () => {
    Register.registration(testFirstName,testLastName,testEmail)
    Register.inputPassword.type("12345");
    Register.btnRegister.click();

    cy.url().should("include", "/dashboard");
    Dashboard.userInfo.should('exist');
  });

  it("should not register an account with already existing email", () => {
    Register.registration(testFirstName,testLastName,testEmail)
    Register.inputPassword.type("12345");
    Register.btnRegister.click();

    cy.get('[role="alert"]').contains("failed");
  });

  it('should delete the test user', () => {
    cy.adminLogin(adminEmail,adminPw)
    Dashboard.dashbrd;
    Dashboard.userInfo.should('exist');

    Dashboard.btnUserList.click()
    Dashboard.inputSearch.type(testLastName)
    Dashboard.searchEmail(testEmail)
    Dashboard.btnDelete.click()

    cy.get('td')
            .contains(testEmail)
            .should('not.exist');

  })
});
