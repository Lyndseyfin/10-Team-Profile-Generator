const egQuestions = [
    {
        type:'input',
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
        type:'input',
        name: 'github',
        message: 'What is the engineer\'s Github user name?'
    },
    {
        type: 'list',
        name: 'addEmp',
        message: 'Would you like to add another employee to your team?',
        choices: ['Engineer', 'Intern', 'Done']
    }
];

module.exports = egQuestions;