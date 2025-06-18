/**
 * MOCHA STRUCTURE:
 * describe() -> test suite
 * it() -> test
*/

const {pages}  = require ('../pom');

describe('Doctors page', () =>{

    //hook: open this page at the beggining of all tests
    beforeEach(async () => {
        //console.log('Hook');
        await pages('dashboard').open();
        
    })



    //first test: Page title equals a valuue
    it ('Check page title', async () => {
        //console.log('First test');
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
    
    })

    //second test: Verify that modal window opens
    it ( 'Open modal windows for adding a new doctor', async () => {
        //console.log('Second test');
        await pages('dashboard').sideMenu.item('Doctors').click();
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
        await expect(pages('doctors').addDoctor.rootEl).toBeDisplayed();
    })

    //third test: add a new doctor
    it ('Add new doctor', async () => {
        //console.log('Third test');
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
        await expect(pages('doctors').doctorCard(8).name).toHaveText('Dr. John Doe', {ignoreCase: true});
        //verify education
        await expect(pages('doctors').doctorCard(8).education).toHaveText('Basic', {ignoreCase: true});
    })

    //fourth test: modal window (to create doctor) disappear if clicked on close 
    it ('Close a modal window for creating a new doctor',async () => {
        //console.log('Fourth test');
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


/*    
//zero test: it is actually creating two pages

    it('creating two pages', () => {
        const page1 = pages('dashboard');
        const page2 = pages('dashboard');

        console.log('ID 1:', page1.id);
        console.log('ID 2:', page2.id);
    })
        
*/