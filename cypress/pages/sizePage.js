


export class sizePage{



 sizePageSelectors={
    itemsOnPage:"div.spf-product__info > div.h4.spf-product-card__title > a"

 }   

 verifyResultPageContainsSize(size) {
   cy.get(this.sizePageSelectors.itemsOnPage).each((item) => {
     expect(item).to.contain(size);
   });
 }
}