/*
* should at least include side menu and "add new doctor" button
side menu is visible in all pages of the website: duplicate it in all pages
*/


const ListHeaderComponent = require ('../components/doctors/listheader.component')
const AddDoctorComponent = require ('../components/doctors/adddoctor.component')

class DoctorsPage {
    
    // constructor to include ListHeaderComponent
    constructor () {
        this.doctorListHeader = new ListHeaderComponent();
        this.addDoctor = new AddDoctorComponent();
    }

    // function to open this page
    async open() {
        await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors');
    }
}

module.exports = DoctorsPage;
