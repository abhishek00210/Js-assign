export function renderEmployeeRegistration(container) {
    container.innerHTML = `
        <h2>Employee Registration</h2>
        <form id="employee-form">
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" required>
            </div>
            <div>
                <label for="position">Position:</label>
                <input type="text" id="position" required>
            </div>
            <div>
                <label for="about">About:</label>
                <textarea id="about" required></textarea>
            </div>
            <div>
                <label for="joining_date">Joining Date:</label>
                <input type="date" id="joining_date" required>
            </div>
            <button type="submit">Submit</button>
        </form>
    `;

    const form = container.querySelector('#employee-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const employee = {
            name: form.name.value,
            position: form.position.value,
            about: form.about.value,
            joining_date: form.joining_date.value
        };
        const employees = JSON.parse(localStorage.getItem('employees')) || [];
        employees.push(employee);
        localStorage.setItem('employees', JSON.stringify(employees));
        navigate('listing');
    });
}

