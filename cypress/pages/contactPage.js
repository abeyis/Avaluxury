
export class contactPage{
contactPageSelectors={
 name:"#ContactForm-name",
 email:"#ContactForm-email",
 phone:"#ContactForm-phone",
 comment:"#ContactForm-body",
 sendButton:"button[class='button']",

 successMessage:".form-status.form-status-list.form__message"
}


fillNecassaryInfo(){
    
cy.get(this.contactPageSelectors.name).type(' Osman Sayli');
cy.get(this.contactPageSelectors.email).type('osman@abeyis.com');
cy.get(this.contactPageSelectors.phone).type(12346789);
cy.get(this.contactPageSelectors.comment).clear().type('This is test');
}

clickToSendButton(){
    cy.get(this.contactPageSelectors.sendButton).click();
}

/*
clickToEmailSubsription(){
    cy.get("iframe").its('contentDocument.body').
    then(cy.wrap).find("#NewsletterForm--sections--21128380875025__footer").type('Osman');
    
}
*/
}