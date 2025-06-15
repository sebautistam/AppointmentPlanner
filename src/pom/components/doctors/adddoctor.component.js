const BaseComponent = require ('../common/base.component');

class AddDoctorComponent extends BaseComponent{
    
    constructor() {
        super('.new-doctor-dialog.e-dlg-modal');
    }

    //this element will have more nested elements, so it is good to have its root

}

module.exports = AddDoctorComponent;