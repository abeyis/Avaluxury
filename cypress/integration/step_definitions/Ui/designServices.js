
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../../../pages/homePage";
import { designServicesPage } from "../../../pages/designServicesPage";

let HomePage=null
let DesignServicesPage=null
before(()=>{
  DesignServicesPage=new designServicesPage();
  HomePage =new homePage();
})

When('User clicks to Design Services', () => {
    HomePage.clickDesignServices();
});



When('User clicks to View All Our Recent Products',()=>{
  DesignServicesPage.clickViewAllOurRecentProducts();
});

And('User fills all necassary fields',()=>{
  DesignServicesPage.fillNecassaryInfo();
});



   
