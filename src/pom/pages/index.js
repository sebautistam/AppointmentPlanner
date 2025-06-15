const DashboardPage = require("./dashboard.page");
const DoctorsPage = require("./doctors.page");

/**
 * @param name {'dashboard' | 'doctors'} 
 * @returns { DashboardPage | DoctorsPage }
 */

const items = {
    dashboard: new DashboardPage(),
    doctors: new DoctorsPage(),
}

function pages (name) {
    return items[name.toLowerCase()];
}

module.exports = {
    DashboardPage,
    DoctorsPage,
    pages,
}