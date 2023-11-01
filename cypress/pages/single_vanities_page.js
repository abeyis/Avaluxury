
export class SingleVanitiesPage{
    
    singleVanitiesSelectors={
            colorButton:"div.h3 > span:contains('Color')" ,
                greenColour:"span.gf-option-one-color[style='background-color:rgba(147, 168, 52, 1)']" ,
                blackColour: "span.gf-option-one-color[style='background-color:rgba(0, 0, 0, 1)']",
            sizeButton: "span:contains('Size')",
            collectionButton: "span:contains('Collection')",
            priceButton: "span:contains('Price')",

        // green vanities
            SelenaBathroomVanity48: 'a[translatable][href="/products/48-inch-green-selena-bathroom-vanity?variant=47450065830161"]',
            SelenaBathroomVanity36: 'a[translatable][href="/products/36-inch-green-selena-bathroom-vanity?variant=47449987023121"]',
            SelenaBathroomVanity30: 'a[translatable][href="/products/30-inch-green-selena-bathroom-vanity?variant=47449908773137"]',
            SelenaBathroomVanity24: 'a[translatable][href="/products/24-inch-green-selena-bathroom-vanity?variant=47449855066385"]'        

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

    getHeaderOfProduct1() {
        return cy.get (this.singleVanitiesSelectors. SelenaBathroomVanity48);
      }

    getHeaderOfProduct2(){
       return cy. get (this.singleVanitiesSelectors. SelenaBathroomVanity36)
    }

    getHeaderOfProduct3(){
        return cy. get (this.singleVanitiesSelectors. SelenaBathroomVanity30)
    }

    getHeaderOfProduct4(){
        return cy. get (this.singleVanitiesSelectors. SelenaBathroomVanity24)
    }

}





