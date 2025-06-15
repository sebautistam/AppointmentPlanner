const BaseComponent = require ('../common/base.component');

class AddDoctorComponent extends BaseComponent {
    
    constructor() {
        super('.new-doctor-dialog.e-dlg-modal');
    }

    //this element will have more nested elements, so it is good to have its root
    
    /**
     * 
     * @param  name {'name' | 'phone' | 'email' | 'education'}
     * @returns 
     */

    input(name){
        const selectors = {
            name: '[name="Name"]',
            phone: '#DoctorMobile',
            email: '[name="Email"]',
            education: '[name="Education"]',
        }
        return this.rootEl.$(selectors[name.toLowerCase()]);
    }


    // submit button
    get submitBtn() {
        return this.rootEl.$('.button-container button.e-primary');
    }


    // close button / icon
    get closeBtn() {
        return this.rootEl.$('button.e-dlg-closeicon-btn');
    }

}

module.exports = AddDoctorComponent;

