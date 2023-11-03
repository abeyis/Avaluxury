export class freestandingPage{


    freestandingPageSelectors = {
        
        colorTitle:"div[class='gf-block-title']",
  //      color: "div[data-filter-id='98948']",
        colorSearch:".gf-search",
        colorBeechwood:"button[title='Beechwood']",
        colorDarkOak:"button[title='Dark Oak']",
        colorGray:"button[title='Gray']",
        colorGreen:"button[title='Green']",
        colorNavyBlue:"button[title='Navy Blue']",
        colorWhite:"button[title='White']",

        productColor:"div.h4.spf-product-card__title>a",
     //  t:'#HeaderMenu-sizes-' + chosenSize + '-inch',
        


        sizeTitle:"div[class='gf-block-title']",
    //    size: "div[data-filter-id='98949']",
        size18: "button[title='18 Inch']",
        size24: "button[title='24 Inch']",
        size30: "button[title='30 Inch']",
        size36: "button[title='36 Inch']",
        size40: "button[title='40 Inch']",
        size48: "button[title='48 Inch']",
        size60: "button[title='60 Inch']",
        size72: "button[title='72 Inch']",

        price:"div[data-filter-id='98943']",
        minPriceInput:"#min-98943",
        maxPriceInput:"#max-98943",
      

        yourCart:"h1[class='title title--primary']",
        yourCartContinueShopping:".underlined-link",
        yourCartQuantity:".cart-item__quantity",
        yourCartCheckOut:"button[class='cart__checkout-button button']",
        yourCartPay:".dynamic-checkout__content",
        yourCartFollowOnShop:"#NewsletterForm--sections--21128380875025__footer"
        

    }
    
    pickColor(color){
        cy.get(this.freestandingPageSelectors.color).click()


        

            switch (color) {
              case "Beechwood":
                cy.get(this.freestandingPageSelectors.colorBeechwood).click()
                break
              case "Dark Oak":
                cy.get(this.freestandingPageSelectors.colorDarkOak).click()
                break
              case "Gray":
                cy.get(this.freestandingPageSelectors.colorGray).click()
                break
              case "Green":
                cy.get(this.freestandingPageSelectors.colorGreen).click()
                break
              case "Navy Blue":
                cy.get(this.freestandingPageSelectors.colorNavyBlue).click()
                break
              case "White":
                cy.get(this.freestandingPageSelectors.colorWhite).click()
                break
              default:
                throw new Error("There is no such color");
            }

    }
   
    chooseColor(color) {
        cy.get('button[data-fvalue='+`${color}` + '] span').click();
      }


    verifyProductColor(color){
        cy.get(this.freestandingPageSelectors.productColor).each((item)=>{
            cy.log(item)
            expect(item).to.contain(color);
            cy.wait(3000)
        })
    }

    pickSize(size){
        cy.get(this.freestandingPageSelectors.size).click()
        
            switch (size) {
                case "18 Inch":
                    cy.get(this.freestandingPageSelectors.size18).click()
                    break
                case "24 Inch":
                    cy.get(this.freestandingPageSelectors.size24).click()
                    break
                case "30 Inch":
                    cy.get(this.freestandingPageSelectors.size30).click()
                    break
                case "36 Inch":
                    cy.get(this.freestandingPageSelectors.size36).click()
                    break
                case "40 Inch":
                    cy.get(this.freestandingPageSelectors.size40).click()
                    break
                case "48 Inch":
                    cy.get(this.freestandingPageSelectors.size48).click()
                    break
                case "60 Inch":
                    cy.get(this.freestandingPageSelectors.size60).click()
                    break
                case "72 Inch":
                    cy.get(this.freestandingPageSelectors.size72).click()
                    break
                default:
                    throw new Error("There is no such size");
            }
        }

        verifyProductSize(size){
            cy.get(this.freestandingPageSelectors.productSize).each((item)=>{
                cy.log(item)
                expect(item).to.contain(size);
            })
        }
    

        
        definePriceRange(minPrice, maxPrice) {
       
            cy.get(this.freestandingPageSelectors.minPriceInput).type(minPrice)
            cy.get(this.freestandingPageSelectors.maxPriceInput).type(maxPrice)
            
        }
            

        }
    
