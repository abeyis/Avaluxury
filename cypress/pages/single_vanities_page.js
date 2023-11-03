
export class SingleVanitiesPage{
    
    singleVanitiesSelectors={
            colorButton:"div.h3>span:contains('Color')" ,
                greenColour:"span.gf-option-one-color[style='background-color:rgba(147, 168, 52, 1)']" ,
                blackColour: "span.gf-option-one-color[style='background-color:rgba(0, 0, 0, 1)']",
           
            sizeButton: "div.h3>span:contains('Size')",
                size_18inch:"button[role='checkbox'][aria-checked='false'][data-fid='98949'][data-fvalue='18 Inch'][title='18 Inch']",   
            
            collectionButton: "div.h3>span:contains('Collection')",
                singleBathroomVanitiesCollection: 'button[role="checkbox"][aria-checked="true"][data-fid="98973"][data-fvalue="461776847121"][title="Single Bathroom Vanities"]',
            
            priceButton: "div.h3>span:contains('Price')",

        // green vanities (color filter)
            SelenaBathroomVanity48: 'a[translatable][href="/products/48-inch-green-selena-bathroom-vanity?variant=47450065830161"]',
            SelenaBathroomVanity36: 'a[translatable][href="/products/36-inch-green-selena-bathroom-vanity?variant=47449987023121"]',
            SelenaBathroomVanity30: 'a[translatable][href="/products/30-inch-green-selena-bathroom-vanity?variant=47449908773137"]',
            SelenaBathroomVanity24: 'a[translatable][href="/products/24-inch-green-selena-bathroom-vanity?variant=47449855066385"]',       

        //18 inch vanities (size filter)
            SelenaBathroomVanityWhite18: "a[translatable][href='/products/18-inch-white-selena-bathroom-vanity?variant=47425636139281']",
            SelenaBathroomVanityGray18: "a[translatable][href='/products/18-inch-gray-selena-bathroom-vanity?variant=47449802932497']",


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

    clickSize18inch(){
        cy.get (this.singleVanitiesSelectors.size_18inch).click()
    }

    getHeaderOfProduct5(){
        return cy. get (this.singleVanitiesSelectors.SelenaBathroomVanityWhite18)
    }

    getHeaderOfProduct6(){
        return cy. get (this.singleVanitiesSelectors.SelenaBathroomVanityGray18)
    }

    
    clickSingleBathroomVanitiesCollection() {
        cy.get (this.singleVanitiesSelectors.singleBathroomVanitiesCollection).click()
    }




}

