export class freestandingPage {
  freestandingPageSelectors = {
    colorTitle: "div[class='gf-block-title']",
    colorSearch: ".gf-search",
    colorBeechwood: "button[title='Beechwood']",
    colorDarkOak: "button[title='Dark Oak']",
    colorGray: "button[title='Gray']",
    colorGreen: "button[title='Green']",
    colorNavyBlue: "button[title='Navy Blue']",
    colorWhite: "button[title='White']",

    productTitle: "div.h4.spf-product-card__title>a",

    sizeTitle: "div[class='gf-block-title']",
    size: "div[data-filter-id='98949']",
    size18: "button[title='18 Inch']",
    size24: "button[title='24 Inch']",
    size30: "button[title='30 Inch']",
    size36: "button[title='36 Inch']",
    size40: "button[title='40 Inch']",
    size48: "button[title='48 Inch']",
    size60: "button[title='60 Inch']",
    size72: "button[title='72 Inch']",

    price: "div[data-filter-id='98943']",
    minPriceInput: "#min-98943",
    maxPriceInput: "#max-98943",

    searchProducts: ".gf-controls-search-form",
    graySelena: ".h4 spf-product-card__title",
    graySelenaDoubleSink: "#MediaGallery-template--21128380580113__main",

    yourCart: "h1[class='title title--primary']",
    yourCartContinueShopping: ".underlined-link",
    yourCartQuantity: ".cart-item__quantity",
    yourCartCheckOut: "button[class='cart__checkout-button button']",
    yourCartPay: ".dynamic-checkout__content",
    yourCartFollowOnShop: "#NewsletterForm--sections--21128380875025__footer",
  };
  
  pickColor(color) {
    cy.get(this.freestandingPageSelectors.color).click();
    switch (color) {
      case "Beechwood":
        cy.get(this.freestandingPageSelectors.colorBeechwood).click();
        break;
      case "Dark Oak":
        cy.get(this.freestandingPageSelectors.colorDarkOak).click();
        break;
      case "Gray":
        cy.get(this.freestandingPageSelectors.colorGray).click();
        break;
      case "Green":
        cy.get(this.freestandingPageSelectors.colorGreen).click();
        break;
      case "Navy Blue":
        cy.get(this.freestandingPageSelectors.colorNavyBlue).click();
        break;
      case "White":
        cy.get(this.freestandingPageSelectors.colorWhite).click();
        break;
      default:
        throw new Error("There is no such color");
    }
  }

  chooseColor(color) {
    cy.get("button[data-fvalue=" + `${color}` + "] span").click();
    cy.wait(600);
  }

  verifyProductColor(color) {
    cy.get(this.freestandingPageSelectors.productTitle).each((item) => {
      cy.log(item);
      expect(item).to.contain(color);
      cy.wait(1000);
    });
  }

  pickSize(size) {
    cy.get(this.freestandingPageSelectors.size).click();
    cy.wait(600);
    switch (size) {
      case "18 Inch":
        cy.get(this.freestandingPageSelectors.size18).click();
        cy.wait(600);
        break;
      case "24 Inch":
        cy.get(this.freestandingPageSelectors.size24).click();
        cy.wait(600);
        break;
      case "30 Inch":
        cy.get(this.freestandingPageSelectors.size30).click();
        cy.wait(600);
        break;
      case "36 Inch":
        cy.get(this.freestandingPageSelectors.size36).click();
        cy.wait(600);
        break;
      case "40 Inch":
        cy.get(this.freestandingPageSelectors.size40).click();
        cy.wait(600);
        break;
      case "48 Inch":
        cy.get(this.freestandingPageSelectors.size48).click();
        cy.wait(600);
        break;
      case "60 Inch":
        cy.get(this.freestandingPageSelectors.size60).click();
        cy.wait(600);
        break;
      case "72 Inch":
        cy.get(this.freestandingPageSelectors.size72).click();
        cy.wait(600);
        break;
      default:
        throw new Error("There is no such size");
    }
  }
  verifyProductSize(size) {
    cy.get(this.freestandingPageSelectors.productTitle).each((item) => {
      cy.log(item);
      expect(item).to.contain(size);
    });
  }
  definePriceRange(minPrice, maxPrice) {
    cy.get(this.freestandingPageSelectors.minPriceInput).type(minPrice);
    cy.get(this.freestandingPageSelectors.maxPriceInput).type(maxPrice);
  }
}
/*   
        pickSearchProducts(search)
        cy.get(this.freestandingPageSelectors.search).click()
        
         
        pickSearchProducts(search); {
            cy.get(this.freestandingPageSelectors.searchProducts).type(search);
            cy.get(this.freestandingPageSelectors.searchProducts).submit();
          }
        
          verifySearchProducts(search); {
            cy.get(this.freestandingPageSelectors.graySelena).each(($item) => {
              cy.get($item).invoke('text').then((text) => {
                cy.log(text);
                switch (search) {
                  case "Gray Selena":
                    expect(text).to.include("Gray Selena");
                    break;
                  case "Double Sink":
                    expect(text).to.include("Double Sink");
                    break;
                  // Diğer terimler için de aynı şekilde case'ler ekleyebilirsiniz
                  default:
                    throw new Error("There is no such size");
                }
              });
            });
          }
          

        verifySearchProducts(search);{
            cy.get(this.freestandingPageSelectors.productTitle).each((item)=>{
                cy.log(item)
                expect(item).to.contain(search);
                cy.wait(600)
            })
        }
        
    */
