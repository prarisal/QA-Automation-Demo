class Register{
    get registerPage() {return cy.get('[href="/auth/register"]')}
    get btnRegister() {return cy.get('[type="submit"]')}
    get inputFirstName() {return cy.get('[name="firstName"]')}
    get inputLastName() {return cy.get('[name="lastName"]')}
    get inputEmail() {return cy.get('[name="email"]')}
    get inputPassword() {return cy.get('[name="password"]')}

    registration(testFirstName,testLastName,testEmail){
        this.registerPage.click();
        this.inputFirstName.type(testFirstName);
        this.inputLastName.type(testLastName);
        this.inputEmail.type(testEmail);
    }

}

export default new Register()