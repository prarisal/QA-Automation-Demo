import Homepage from "../../pageObject/Homepage/homepage.page";
import FeaturedListings from "../../pageObject/FeaturedListings/featuredlistings.page";

describe("Search", () => {
    beforeEach(() => {
        cy.visit("/")
    });

    it('Should search by keyword', () => {
        Homepage.keywordSearch('Block')
        Homepage.searchBtn.click()

        FeaturedListings.numListing.then(($attr) => {
            cy.wrap($attr.length).should('eql', 1)
        })
        FeaturedListings.titleOfListing.should('have.text','Glass House');
    });

    it('Should search by bedrooms', () => {
        const bedroomCount = 2;
        Homepage.bedroomSelection(bedroomCount)
        Homepage.searchBtn.click()
        FeaturedListings.randomListingsMoreInfo()

        FeaturedListings.numBedrooms.invoke('text').then((numberOfBedroom => {
            const actualBedroom = parseInt(numberOfBedroom.split(': ')[1]);
            cy.wrap(actualBedroom).should('be.gte', bedroomCount);
        }))
    });

    it('Should search by unique city', () => {
        Homepage.searchByCity('Humble')
        Homepage.searchBtn.click()
        
        FeaturedListings.numListing.then(($attr) => {
            cy.wrap($attr.length).should('eql', 1)
        })
    })

    it('Should navigate to the listing details page upon clicking “More Info“', () => {
        Homepage.searchByCity('Humble')
        Homepage.searchBtn.click()
        FeaturedListings.listingInfo.should('contain', 'Sqft: 2000')    
            .should('contain', 'Garage: 1')
            .should('contain', 'Bedrooms: 2')
            .should('contain', 'Bathrooms: 1')
        FeaturedListings.moreInfo.click()
       
        FeaturedListings.moreInfoDetails.should('contain', 'Square Feet: 2000')    
            .should('contain', 'Garage: 1')
            .should('contain', 'Bedrooms: 2')
            .should('contain', 'Bathrooms: 1')  
    })

    it('Should search by price', () => {
        cy.visit('/featured-listings?price=500000-10000000')

        FeaturedListings.listingPrice.each(($priceElement) => {
            const price = $priceElement.text().replace(/\D/g,'')
            expect(parseInt(price)).to.be.above(500000)
            expect(parseInt(price)).to.be.below(10000000)
        })
    })
});
