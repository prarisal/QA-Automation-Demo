import Login from "../../pageObject/Loginpage/login.page";
import Dashboard from "../../pageObject/Dashboard/dashboard.page";

const email = Cypress.env('userEmail')
const password = Cypress.env('userPw')

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("login with correct credential", () => {
    Login.logginIn(email,password)

    cy.url().should("include", "/dashboard");
    Dashboard.userInfo.should("exist");
  });

  it("logout of the account", () => {
    cy.login(email, password)
    Dashboard.dashbrd;
    Dashboard.iconProfile.click();
    Dashboard.btnLogout.click();

    cy.url().should("include", "/auth/login");
  });
});
