// Global variables
const fs = require("fs");
const generateHTML = require("./src/generateHTML");
const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");


//team variable/ array of all team info from constructor classes
const teamData = [];

// manager questions
const mgmtQuestions = [

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
        message: 'What is the manager\'s office number?'
    },

    {
        type: 'list',
        name: 'addEmp',
        message: 'Would you like to add another employee to your team?',
        choices: ['Engineer', 'Intern', 'Done'],
    },
];

//intern questions
const intQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern\'s name?'
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
            choices: ['Engineer', 'Intern', 'Done'],
        },
    ])
        .then((data) => {
            teamData.push(
            new Intern(data.name, data.id, data.email, data.school));
            if (data.addEmp === "Engineer") {
                engQuestions();
            } else if (data.addEmp === "Intern") {
                intQuestions();
            } else {
                let data = generateHTML(teamData);
                fs.writeFileSync("myteam.html", data, "UTF-8");
                console.log('Your Intern has been added')
            }
        });

}

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
            choices: ['Engineer', 'Intern', 'Done'],
        },

    ]).then((data) => {
        teamData.push(
        new Engineer (data.name, data.id, data.email, data.Github));
        if (data.addEmp === "Engineer") {
            engQuestions();
        } else if (data.addEmp === "Intern") {
            intQuestions();

        } else {
            let data = generateHTML(teamData);
            fs.writeFileSync("myteam.html", data, "UTF-8");
            console.log('Your Engineer has been added')
        };

    })
}

const init = () => {
    inquirer.prompt(mgmtQuestions).then((data) => {
        teamData.push(
        new Manager(data.name, data.id, data.email, data.office));
        if (data.addEmp === "Engineer") {
            engQuestions();
        } else if (data.addEmp === "Intern") {
            intQuestions();
        } else {
            let data = generateHTML(teamData);
            fs.writeFileSync("myteam.html", data, "UTF-8");
            console.log("Your myteam.html has been created!");
        }
    });
};


//calling the function
init();
