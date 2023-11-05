
export class SingleVanitiesPage{
    
    singleVanitiesSelectors={
            colorButton:"div.h3>span:contains('Color')" ,
            sizeButton: "div.h3>span:contains('Size')",
            collectionButton: "div.h3>span:contains('Collection')",
                singleBathroomVanitiesCollection: 'button[role="checkbox"][aria-checked="true"][data-fid="98973"][data-fvalue="461776847121"][title="Single Bathroom Vanities"]', 
            priceButton: "div.h3>span:contains('Price')",
        //colours
            // green: 'button[data-fvalue="Green"]',
            // darkOak: 'button[data-fvalue="Dark Oak"]',
            // highGlossBlack: 'button[data-fvalue="High Gloss Black"]',
            // highGlossAnthracite:'button[data-fvalue="High Gloss Anthracite"]',
            // beechwood:'button[data-fvalue="Beechwood"]',
            // cappuccino: 'button[data-fvalue="Cappuccino"]',
            // darkOak_black:'button[data-fvalue="Dark Oak & Black"]',
            // gray: 'button[data-fvalue="Gray"]',
            // highGlossWhite: 'button[data-fvalue="High Gloss White"]',
            // lightOak_anthracite:'button[data-fvalue="Light Oak & Anthracite"]',
            // mint: 'button[data-fvalue="Mint"]'
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
        cy.get(`button[data-fvalue="${selected_color}"]`).click().click().click();
    }
    


}

