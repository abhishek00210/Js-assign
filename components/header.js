export function renderHeader(container) {
    container.innerHTML = `
        <div class="header-top">
            <div class="logo">Employee Management</div>
            <div class="search-bar">
                <input type="text" id="search-input" placeholder="Search employees...">
                <button id="search-button">Search</button>
            </div>
            <div class="hamburger">☰</div>
        </div>
        <nav class="nav-menu">
            <ul>
                <li><a href="#" onclick="navigate('registration')">Employee Registration</a></li>
                <li><a href="#" onclick="navigate('listing')">Employee Listing</a></li>
            </ul>
        </nav>
    `;

    const hamburger = container.querySelector('.hamburger');
    const navMenu = container.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    const searchInput = container.querySelector('#search-input');
    const searchButton = container.querySelector('#search-button');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const employees = JSON.parse(localStorage.getItem('employees')) || [];
        const filteredEmployees = employees.filter(employee => 
            employee.name.toLowerCase().includes(searchTerm)
        );
        renderEmployeeListing(document.getElementById('main-content'), filteredEmployees);
    });
}

