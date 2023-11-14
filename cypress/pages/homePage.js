

export class homePage {
    homePageSelectors={
     home:".header__active-menu-item",
     shopAll :"a[id='HeaderMenu-shop-all'] span",
     singleVanities:"a[id='HeaderMenu-single-vanities'] span",
     doubleVanities:"a[id='HeaderMenu-double-vanities'] span",
     style:"summary[id='HeaderMenu-style'] span",
     freeStandingVanities:"#HeaderMenu-style-freestanding-vanities",
     floatingVanities:"#HeaderMenu-style-floating-vanities",
     sizes:"summary[id='HeaderMenu-sizes'] span",
     colors:"#HeaderMenu-colors",
     designServices:"a[id='HeaderMenu-design-services'] span",
     blog:"a[id='HeaderMenu-blog'] span",
     contact:"a[id='HeaderMenu-contact'] span",
     about:"a[id='HeaderMenu-about'] span",
    }

   clickDesignServices(){
    cy.get(this.homePageSelectors.designServices).click();

   }

  clickContact() {
    cy.get(this.homePageSelectors.contact).click();
  }

  clickFloatingBathroomVainities() {
    cy.get(this.homePageSelectors.style).click();
    cy.get(this.homePageSelectors.floatingVanities).click();
  }

  clickToSizes() {
    cy.get(this.homePageSelectors.sizes).click();
  }

   chooseSize(size) {
    cy.get('#HeaderMenu-sizes-' + size + '-inch').click();

  }

  clickSingleVanities() {
    cy.get(this.homePageSelectors.singleVanities).click();
  }

  clickDoubleVanities() {
    cy.get(this.homePageSelectors.doubleVanities).click();
   }

   
  clickShopAll() {
    cy.get(this.homePageSelectors.shopAll).click();
  }

  clickFreeStandingVanities() {
    cy.get(this.homePageSelectors.style).click();
    cy.get(this.homePageSelectors.freeStandingVanities).click();
  }

  clickContact() {
    cy.get(this.homePageSelectors.contact).click();
  }
}

