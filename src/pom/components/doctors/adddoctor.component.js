class AddDoctorComponent {
    
    //root element getter; this element will have more nested elements, so it is good to have its root
    get rootEl () {
        return $('.new-doctor-dialog.e-dlg-modal');
    }

}

module.exports = AddDoctorComponent;