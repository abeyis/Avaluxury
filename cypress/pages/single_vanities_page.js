
export class SingleVanitiesPage{
    
    singleVanitiesSelectors={
            colorButton:"span:contains('Color')" ,
                greenColour:"span.gf-option-one-color[style='background-color:rgba(147, 168, 52, 1)']" ,
                blackColour: "span.gf-option-one-color[style='background-color:rgba(0, 0, 0, 1)']",
            sizeButton: "span:contains('Size')",
            collectionButton: "span:contains('Collection')",
            priceButton: "span:contains('Price')",

    }




    clickColorButton(){
        cy.get(this.singleVanitiesSelectors.colorButton).click()
       }
        
    clickSizeButton(){
        cy.get(this.singleVanitiesSelectors.sizeButton).click()
       }

    clickCollectionButton(){
        cy.get(this.singleVanitiesSelectors.collectionButton).click()
    }

    clickPriceButton(){
        cy.get(this.singleVanitiesSelectors.priceButton).click()
    }

    clickGreenColour(){
        cy.get(this.singleVanitiesSelectors.greenColour).click()
    }

    clickBlackColour(){
        cy.get(this.singleVanitiesSelectors.blackColour).click()
    }








    
    clickSearchBox_and_typeSearchWord (search_word) {
        cy.get('input.gf-controls-search-input[name="q"][placeholder="Search products"]')
          .click()
          .type(search_word + '{enter}');
    };
      

    getProductsInThePage(){
     return cy.get('.spf-product-card__title')
 }


}





