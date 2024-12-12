import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { renderEmployeeRegistration } from './components/employeeRegistration.js';
import { renderEmployeeListing } from './components/employeeListing.js';

const header = document.getElementById('header');
const mainContent = document.getElementById('main-content');
const footer = document.getElementById('footer');

renderHeader(header);
renderFooter(footer);

function navigate(page) {
    switch (page) {
        case 'registration':
            renderEmployeeRegistration(mainContent);
            break;
        case 'listing':
            renderEmployeeListing(mainContent);
            break;
        default:
            renderEmployeeListing(mainContent);
    }
}

window.navigate = navigate;

// Initial navigation
navigate('listing');

