class Homepage{
    get searchBar() {return cy.get('[id=":r1:"]')}
    get bedrooms() {return cy.get('[id=":r2:"]')}
    get searchBtn() {return cy.get('[class*="css-11qckc0"]')}
    get city() {return cy.get('[id=":r4:"]')}

    keywordSearch(word){
        this.searchBar.type(word)
    }
    
    bedroomSelection(numberOfBedroom){
        this.bedrooms.click()
        cy.get('[class*="MuiMenu-list "]').contains(numberOfBedroom).click()
    }
    
    searchByCity(cityName){
        this.city.type(cityName)
    }
}

export default new Homepage()