const SideMenuComponent = require ('../components/common/sidemenu.components');
const BasePage = require('./base.page');

class DashboardPage extends BasePage {

    constructor (){
        super('/showcase/angular/appointmentplanner/#/dashboard');
        this.sideMenu = new SideMenuComponent();
    }

}

module.exports = DashboardPage;