const HeaderComponent = require ('../components/common/header.component');
const SideMenuComponent = require ('../components/common/sidemenu.components');

class BasePage {

    constructor (url) {
        this.url = url;
        this.header = new HeaderComponent();
        this.sideMenu = new SideMenuComponent();
    }

    async open () {
        return browser.url(this.url);
    }
}

module.exports = BasePage;