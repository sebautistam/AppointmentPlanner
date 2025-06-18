const DashboardPage = require("./dashboard.page");
const DoctorsPage = require("./doctors.page");

/**
 * @param name {'dashboard' | 'doctors'} 
 * @returns { DashboardPage | DoctorsPage }
 */

/*
function pages (name) {
    const items = {
        dashboard: new DashboardPage(),
        doctors: new DoctorsPage(),
    }
    return items[name.toLowerCase()];
}

*/


// creation of page, new page for each call of function
function pages (name) {
    keyNamePage = name.toLowerCase();

    switch(keyNamePage) {
        case 'dashboard':
            return new DashboardPage();
        case 'doctors':
            return new DoctorsPage();
    }
}


// ONE CREATION OF PAGE, check it exists before
/*const cache = {};

function pages (name) {
    keyNamePage = name.toLowerCase();

    if (!cache[keyNamePage]) {
        switch(keyNamePage) {
            case 'dashboard':
                cache[keyNamePage] = new DashboardPage();
                break;
            case 'doctors':
                cache[keyNamePage] = new DoctorsPage();
                break;
        }
    }

    return cache[keyNamePage];
}*/

module.exports = {
    DashboardPage,
    DoctorsPage,
    pages,
}