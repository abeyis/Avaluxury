
export class SingleVanitiesPage{
    
    singleVanitiesSelectors={
            colorButton:"span:contains('Color')" ,
                greenColour:"span.gf-option-one-color[style='background-color:rgba(147, 168, 52, 1)']" ,
                blackColour: "span.gf-option-one-color[style='background-color:rgba(0, 0, 0, 1)']",
            sizeButton: "span:contains('Size')",
            collectionButton: "span:contains('Collection')",
            priceButton: "span:contains('Price')",


            addToCart_button: "button.spf-product__form-btn-addtocart"

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

    
    addToCartRandomProduct() {
        const productSelectors = '.spf-product-card'; 
      
        cy.get(productSelectors).then((products) => {
         
          const randomIndex = Math.floor(Math.random() * products.length);
          const randomProduct = products[randomIndex];
      
          
          cy.wrap(randomProduct).find('button.spf-product__form-btn-addtocart').click();
        });
      };
  
      clickCheckOutButton(){
        cy.get('button#checkout.cart__checkout-button.button[name="checkout"]').click();
      }
 

}





