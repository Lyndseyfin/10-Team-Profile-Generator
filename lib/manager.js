const Employee = require('./Employee');
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Super is used to call functions on the parent class of Employee
        super(name, id, email);
        // This stores the office number
        this.officeNumber = officeNumber;

    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;