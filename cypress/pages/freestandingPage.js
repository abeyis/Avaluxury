export class freestandingPage{


    freestandingPageSelectors = {

            color: "div[data-filter-id='98948']",
            colorSearch:".gf-search",
            colorBeechwood:"button[title='Beechwood']",
            colorDarkOak:"button[title='Dark Oak']",
            colorGray:"button[title='Gray']",
            colorGreen:"button[title='Green']",
            colorNavyBlue:"button[title='Navy Blue']",
            colorWhite:"button[title='White']",
         


    }
    
    pickColor(){
        cy.get(this.freestandingPageSelectors.color).click()
        cy.get(this.freestandingPageSelectors.colorBeechwood).click()
    }
}