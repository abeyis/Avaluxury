
export class designServicesPage{


    designServicesPageSelectors={
        viewAllOurRecentProducts:"a[class='button button--secondary']",
        iframe1:".aut-iframe",
        letsWorkTogetherIfame:"#form-iframe-12244",
        firstName:"#txt-2a7673b8-52d8-4623-bd82-57e89b5b7f5e",
        lastName:'#txt-2d7ca21f-370c-478a-b5bf-e329e9b843ee',
        phoneNumber:'#phone-80ed4982-2c72-4254-b9d9-32d914588910',
        email:'#txt-63f6eabb-0581-4c53-b643-c86905ab1e5f',
        budget:'#txt-d9e4b92b-e53a-473c-9560-5a2a573a0970',
        dateOfProject:'#txt-ba1a0512-27da-47d2-9b0d-f7d493728559',
        howCanWeHelp:'#txt-4f06f9c1-2841-4d81-a8a0-0d4513c41243',
        uploadFile:'#btn-file-upload-f9a0ff8a-6226-4426-91fe-6fd48f86ed15',
        agree:"label[for='single-checkbox-9b5b71b8-b819-4608-a42f-8539a49530c9']",
        subscribeEmail:'#NewsletterForm--template--21295586378001__cb1f69ad-96a5-43f7-8ddd-5e8b1291896b'

    }



    clickViewAllOurRecentProducts(){
      cy.get(this.designServicesPageSelectors.viewAllOurRecentProducts).click()
    }


}