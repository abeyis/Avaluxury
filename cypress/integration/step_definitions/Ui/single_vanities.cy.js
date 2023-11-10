import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import { homePage } from "../../../pages/homePage";
import { SingeVanitiesPage } from "../../../pages/single_vanities_page";


let HomePage=null
before(()=>{
    HomePage =new homePage();
})

When('User clicks to Single Vanities', () => {
    HomePage.clickSingleVanities();
});
   
















