
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../../../pages/HomePage";
import { contactPage } from "../../../pages/contactPage";


let HomePage=null
let ContactPage=null
before(()=>{
  HomePage =new homePage();
  ContactPage=new contactPage();
})

When('User clicks to Contact', () => {
    HomePage.clickContact();
});


When('User fills mecassary information', ()=>{
  ContactPage.fillNecassaryInfo();
})

And('User clicks send button',()=>{
  ContactPage.clickToSendButton();
})


When('User enters valid email address',()=>{
  ContactPage.clickToEmailSubsription();
})