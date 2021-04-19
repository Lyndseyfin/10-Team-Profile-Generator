const Employee = require('./Employee');

// This code defines the Engineer class. Engineer class extends the class of Employee so you don't have to grab repeated data again. Adds userName to pull engineer's Github user name.
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Super is used to call functions on the parent class of Employee
        super(name, id, email);
        // This stores the Github user id
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
    
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;