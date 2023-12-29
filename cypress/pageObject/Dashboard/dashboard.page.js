class Dashboard{
    get dashbrd() {return cy.visit('https://dev.delekhomes.com/dashboard/user/profile')}
    get iconProfile() {return cy.get('button [data-testid="PersonIcon"]')}
    get btnLogout() {return cy.get('li[role="menuitem"]').contains('Logout')}
    get btnDashOption() {return cy.get('button[class*="css-1xk5apd"]')}
    get btnUserList() {return cy.get('ul').contains('list')}
    get inputSearch() {return cy.get('[type="text"]')}
    get btnDelete() {return  cy.get('li[role="menuitem"]').contains('Delete')}
    get userInfo() {return cy.get('.MuiTypography-subtitle2')}

    searchEmail(email){
        cy.get('td').contains(email).siblings('td').find('[type="button"]').click()
    }
}

export default new Dashboard()