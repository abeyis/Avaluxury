
export class SingleVanitiesPage{
    
    singleVanitiesSelectors={
            colorButton:"div.h3>span:contains('Color')" ,
            sizeButton: "div.h3>span:contains('Size')",
            collectionButton: "div.h3>span:contains('Collection')",
                singleBathroomVanitiesCollection: 'button[role="checkbox"][aria-checked="true"][data-fid="98973"][data-fvalue="461776847121"][title="Single Bathroom Vanities"]', 
            priceButton: "div.h3>span:contains('Price')",

            productTitle: ".h4.spf-product-card__title",
            productDescription: 'p[data-mce-fragment="1"]'
        }
   

    clickColorButton(){
        cy.get(this.singleVanitiesSelectors.colorButton).click()
       }
        
    clickSizeButton(){
        cy.get(this.singleVanitiesSelectors.sizeButton).click()
       }

    clickCollectionButton(){
        cy.get(this.singleVanitiesSelectors.collectionButton).click().click()
    }

    clickPriceButton(){
        cy.get(this.singleVanitiesSelectors.priceButton).click()
    }

    
    clickSingleBathroomVanitiesCollection() {
        cy.get (this.singleVanitiesSelectors.singleBathroomVanitiesCollection).click()
    }

    
    selectColor(selected_color) {
        cy.get(`button[data-fvalue="${selected_color}"]`).click();
    }

    getProductsInThePage(){
       return cy.get('.spf-product-card__title')
    }
    
    selectSize(selected_size) {
        cy.get(`button[data-fid="98949"][title="${selected_size}"]`).click();
    }
}

