class FeaturedListings{
    get noListing() {return cy.get('.MuiGrid-grid-sm-6')}
    get moreInfo() {return cy.get('a.MuiButton-containedPrimary').contains('More Info')}
    get listingInfo() {return cy.get('.MuiCard-root')}
    get moreInfoDetails() {return cy.get('.MuiGrid-grid-md-8')}
    get titleOfListing() {return cy.get('.MuiTypography-h5 ')}
    get numListing() {return cy.get('[class*="css-1twzmnh"]')} 
    get numBedrooms() {return cy.get('[class*="css-1s50f5r"]:contains("Bedrooms")')}
    get listingPrice() {return cy.get('.css-dc9kff:contains($)')}
    
    randomListingsMoreInfo(){
        cy.get('a.MuiButton-containedPrimary').then(($attr) => {
            const randomIndex = Math.floor(Math.random() * $attr.length);
            const $selectAttr = $attr[randomIndex];
            cy.wrap($selectAttr).click()
        })
    }
}

export default new FeaturedListings();