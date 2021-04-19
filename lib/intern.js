const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, github) {
        // Super is used to call functions on the parent class of Employee
        super(name, id, email);
        // This stores the Github user id
        this.github = github;
    }
    
    getSchool() {
        return this.school;
    }
    
    getRole() {
        return "Inten";
    }
}

module.exports = Intern;