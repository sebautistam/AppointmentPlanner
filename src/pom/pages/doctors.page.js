const BasePage = require('./base.page');

const { AddDoctorComponent, ListHeaderComponent } = require ('../components')

class DoctorsPage extends BasePage {
    
    // constructor to include ListHeaderComponent
    constructor () {
        super ('/showcase/angular/appointmentplanner/#/doctors');
        this.doctorListHeader = new ListHeaderComponent();
        this.addDoctor = new AddDoctorComponent();
    }

}

module.exports = DoctorsPage;


/*
* should at least include side menu and "add new doctor" button
side menu is visible in all pages of the website: duplicate it in all pages
*/
