// required packages
const fs = require("fs");
const generateHTML = require("./src/generateHTML");
const inquirer = require("inquirer");
const path = require("path");

//outside variables
const employee = require("./lib/employee");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");
// const render = require("./lib/htmlRenderer");

//team variable/ array of all team info from constructor classes
const teamData = [];

// employee questions
const empQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee\'s name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee\'s id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee\'s email?'
        },
        {
            type: 'list',
            name: 'addEmp',
            message: 'Would you like to add another employee to your team?',
            choices: ['Manager', 'Engineer', 'Intern', 'Done']
        }
    ])
};


// manager questions
const mgmtQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the manager\'s name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the manager\'s id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the manager\'s email?'
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is the manager\'s office number'
        },

        {
            type: 'list',
            name: 'addEmp',
            message: 'Would you like to add another employee to your team?',
            choices: ['Engineer', 'Intern', 'Done']
        }
    ])
};

// engineer questions
const engQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer\'s name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineer\'s id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineer\'s email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineer\'s Github user name?'
        },
        {
            type: 'list',
            name: 'addEmp',
            message: 'Would you like to add another employee to your team?',
            choices: ['Engineer', 'Intern', 'Done']
        }
    ])
};


// intern questions 
const intQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the inter\'s name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the intern\'s id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the intern\'s email?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school did the intern\'s attend?'
        },

        {
            type: 'list',
            name: 'addEmp',
            message: 'Would you like to add another employee to your team?',
            choices: ['Engineer', 'Intern', 'Done']
        }
    ])


        .then((data) => {
            teamData.push(
                new Intern(data.name, data.id, data.email, data.school)
            );
            if (data.addEmp === "Engineer") {
                empQuestions();
            } else if (data.addEmp === "Intern") {
                intQuestions();
            } else {
                let data = generateHTML(teamData);
                fs.writeFileSync("team.html", data, "utf-8");
            };

        });

};

const init = () => {
    inquirer.prompt(empQuestions).then((data) => {
        teamData.push(new Manager(data.name, data.id, data.email, data.officeNumber))
        if (data.addEmp === "Engineer") {
            engQuestions();
        }
        else if (data.addEmp === "Intern") {
            intQuestions();
        }
        else {
            generateHTML(teamData);
            let data = generateHTML(teamData);
            fs.writeFileSync("team.html", data, "utf-8");
        }

    });

};

//calling the function
init();