const BasePage = require('./base.page');

class DashboardPage extends BasePage {

    constructor (){
        super('/showcase/angular/appointmentplanner/#/dashboard');
        //this.id = Math.random(); // random number to identify the object
        //console.log(`DashboardPage created with ID: ${this.id}`);
    }

}

module.exports = DashboardPage;