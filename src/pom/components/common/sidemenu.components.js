class SideMenuComponent {
    
    // get function to return the root element, common to all elements here.
    // to call tis get function inside the same component, just use this.rootEl
    get rootEl() {
        return $('#plannerSiderBar');
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

