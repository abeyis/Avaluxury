import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../../../pages/homePage";
import { sizePage } from "../../../pages/sizePage";

let HomePage=null
let SizePage=null
before(()=>{
  SizePage=new sizePage();
  HomePage =new homePage();
})

When('User clicks to size tab',()=>{
    HomePage.clickToSizes();
})

When('User chooses {string} from list',(size)=>{
HomePage.chooseSize(size);
})

Then("User verifies the result page cantains only items with {string}", (size) => {
    SizePage.verifyResultPageContainsSize(size);
  });

Then('User verifies the result page url contains {string}',(size)=>{
SizePage.verifyResultPageContainsSize(size);
})
