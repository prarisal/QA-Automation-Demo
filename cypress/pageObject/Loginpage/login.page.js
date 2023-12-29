class Login {
  get loginPage() {return cy.get('[href="/auth/login"]');}
  get inputEmail() {return cy.get('[name="email"]');}
  get inputPassword() {return cy.get('[name="password"]');}
  get btnSubmit() {return cy.get('[type="submit"]');}

  logginIn(email, password) {
    this.loginPage.click();
    this.inputEmail.type(email);
    this.inputPassword.type(password);
    this.btnSubmit.click();
  }
}

export default new Login();
