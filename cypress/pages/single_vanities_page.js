
export class SingeVanitiesPage{
    
    singleVanitiesSelectors={
            colorButton: "span:contains('Color')" ,
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
    


}





