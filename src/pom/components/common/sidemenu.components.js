const BaseComponent = require ('../common/base.component');

class SideMenuComponent extends BaseComponent {
    
    //constructor, pass its root selector
    //now get function is useless since it is inherited from BaseComponent
    constructor() {
        super('#plannerSiderBar');
    }

    //get function to return the name of the user (simple request)
    get name() {
        return this.rootEl.$('.name');
    }

    //function to return the selector according to the parameter of the function
    item(param) {
        const selectors = {
            dashboard: '[routerlink="/dashboard"]',
            schedule: '[routerlink="/calendar"]',
            doctors: '[routerlink="/doctors"]',
            patients: '[routerlink="/patients"]',
            preference: '[routerlink="/preference"]',
            about: '[routerlink="/about"]'
        }
        return this.rootEl.$(selectors[param.toLowerCase()]);
    }
}

module.exports = SideMenuComponent;

