/**
 * MOCHA STRUCTURE:
 * describe() -> test suite
 * it() -> test
*/

//include DashboardPage and Doctors Page
const DashboardPage = require ('../pom/pages/dashboard.page')
const DoctorsPage = require ('../pom/pages/doctors.page')

//create new dashboard Page
const dashboardPage = new DashboardPage();
const doctorsPage = new DoctorsPage();

describe('Doctors page', () =>{

    //create a hook to execute before each test; all WDIO are async
    //open the page before each test (URL: https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard)
    beforeEach(async () => {
        await dashboardPage.open();
    })

    //first test: Page title equals a valuue
    it ('Check page title', async () => {
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
    })

    //second test: Verify that modal window opens
    it ( 'Open modal windows for adding a new doctor', async () => {
        await dashboardPage.sideMenu.item('Doctors').click();
        await doctorsPage.doctorListHeader.addNewDoctorBtn.click();
        await expect(doctorsPage.addDoctor.rootEl).toBeDisplayed();
    })

    //third test: add a new doctor
    it ('Add new doctor', async () => {

        await dashboardPage.sideMenu.item('Doctors').click();
        await doctorsPage.doctorListHeader.addNewDoctorBtn.click();
        await expect(doctorsPage.addDoctor.rootEl).toBeDisplayed();

        // fill in all required elements:
        // doctor's name
        const doctorNameTB = await $('[name="Name"]');
        await doctorNameTB.setValue('John Doe');
        // phone number
        const doctorPhoneTB = await $('#DoctorMobile');
        await doctorPhoneTB.setValue('1234567890');
        // e-mail
        const doctorEmailTB = await $('[name="Email"]');
        await doctorEmailTB.setValue('test@test.com');
        // education
        const doctorEduTB = await $('[name="Education"]');
        await doctorEduTB.setValue('Basic');

        // click on Submit button
        const submitButton = await $('.button-container button.e-primary');
        await submitButton.click();

        // verify modal window disappeared
        await expect(doctorsPage.addDoctor.rootEl).not.toBeDisplayed();

        
        // verify that new doctor has correct information
        // verify name
        const newDoctorName = await $('#Specialist_8').$('.name');;
        await expect(newDoctorName).toHaveText('Dr. John Doe');

        /* Possible to separate: this is valid
            const newDoctorBox = await $('#Specialist_8');
            const newDoctorName = newDoctorBox.$('.name');
            Be aware that Specialist_8 may be dynamic; in future, function
        */

        //verify education
        const newDoctorEdu = await $('#Specialist_8').$('.education');;
        await expect(newDoctorEdu).toHaveText('Basic', {ignoreCase: true});
    })

    it ('Close a modal window for creating a new doctor',async () => {

        // click on "Doctors" item in the side menu
        await dashboardPage.sideMenu.item('Doctors').click();

        // click on "Add New Doctor" button
        await doctorsPage.doctorListHeader.addNewDoctorBtn.click();

        // wait for visibility of the modal window
        await expect(doctorsPage.addDoctor.rootEl).toBeDisplayed();

        // click on close button
        const closeModalButton = await $('button.e-dlg-closeicon-btn');
        await closeModalButton.click();

        // verty that model window closed
        await expect(doctorsPage.addDoctor.rootEl).not.toBeDisplayed();

    })

})

/*
* tests:
1. navigate to Doctor's pAge OK
2. vefity title OK
3. clickin in add new doctor, windows appear OK
4. create a new doctor, and verify that a doctor is created OK
5. modal window (to create doctor) disappear if clicked on close 
*/