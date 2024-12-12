export function renderEmployeeListing(container, employeesToRender = null) {
    const employees = employeesToRender || JSON.parse(localStorage.getItem('employees')) || [];
    const itemsPerPage = 5;
    let currentPage = 1;

    function renderTable(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedEmployees = employees.slice(start, end);

        let tableHTML = `
            <h2>Employee Listing</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>About</th>
                        <th>Joining Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
        `;

        paginatedEmployees.forEach((employee, index) => {
            tableHTML += `
                <tr>
                    <td>${employee.name}</td>
                    <td>${employee.position}</td>
                    <td>${employee.about}</td>
                    <td>${employee.joining_date}</td>
                    <td><button onclick="removeEmployee(${start + index})">Remove</button></td>
                </tr>
            `;
        });

        tableHTML += `
                </tbody>
            </table>
        `;

        const totalPages = Math.ceil(employees.length / itemsPerPage);
        let paginationHTML = '<div class="pagination">';
        for (let i = 1; i <= totalPages; i++) {
            paginationHTML += `<button onclick="changePage(${i})" ${i === currentPage ? 'disabled' : ''}>${i}</button>`;
        }
        paginationHTML += '</div>';

        container.innerHTML = tableHTML + paginationHTML;
    }

    renderTable(currentPage);

    window.removeEmployee = (index) => {
        employees.splice(index, 1);
        localStorage.setItem('employees', JSON.stringify(employees));
        renderTable(currentPage);
    };

    window.changePage = (page) => {
        currentPage = page;
        renderTable(currentPage);
    };
}

