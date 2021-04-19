class Employee {
    // Constructor for creating a new employee with supplied information. Employees encompass Intern, Engineer, and Manager.
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // This code will return the name, id, email and what this object functionally is, the string: 'employee'
    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;