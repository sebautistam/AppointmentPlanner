/**
 * MOCHA STRUCTURE:
 * describe() -> test suite
 * it() -> test
*/

const {pages}  = require ('../pom');

describe('Doctors page', () =>{

    //hook: open this page at the beggining of all tests
    beforeEach(async () => {
        await pages('dashboard').open();
    })

    //first test: Page title equals a valuue
    it ('Check page title', async () => {
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
    })

    //second test: Verify that modal window opens
    it ( 'Open modal windows for adding a new doctor', async () => {
        await pages('dashboard').sideMenu.item('Doctors').click();
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
        await expect(pages('doctors').addDoctor.rootEl).toBeDisplayed();
    })

    //third test: add a new doctor
    it ('Add new doctor', async () => {

        await pages('dashboard').sideMenu.item('Doctors').click();
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
        await expect(pages('doctors').addDoctor.rootEl).toBeDisplayed();

        // fill in all required elements:
        await pages('doctors').addDoctor.input('name').setValue('John Doe');
        // phone number
        await pages('doctors').addDoctor.input('phone').setValue('1234567890');
        // e-mail
        await pages('doctors').addDoctor.input('email').setValue('test@test.com');
        // education
        await pages('doctors').addDoctor.input('education').setValue('Basic');


        // click on Submit button
        await pages('doctors').addDoctor.submitBtn.click();

        // verify modal window disappeared
        await expect(pages('doctors').addDoctor.rootEl).not.toBeDisplayed();

        
        // verify that new doctor has correct information
        // verify name
        const newDoctorName = await $('#Specialist_8').$('.name');;
        await expect(newDoctorName).toHaveText('Dr. John Doe');

        //verify education
        const newDoctorEdu = await $('#Specialist_8').$('.education');;
        await expect(newDoctorEdu).toHaveText('Basic', {ignoreCase: true});
    })

    //fourth test: modal window (to create doctor) disappear if clicked on close 
    it ('Close a modal window for creating a new doctor',async () => {

        await pages('dashboard').sideMenu.item('Doctors').click();
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
        await expect(pages('doctors').addDoctor.rootEl).toBeDisplayed();

        // click on close button
        await pages('doctors').addDoctor.closeBtn.click();

        // verty that model window closed
        await expect(pages('doctors').addDoctor.rootEl).not.toBeDisplayed();

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