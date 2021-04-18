const iQuestions = [
    {
        type:'input',
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
        type:'input',
        name: 'school',
        message: 'What school did the intern\'s attend?'
    },
   
    {
        type: 'list',
        name: 'addEmp',
        message: 'Would you like to add another employee to your team?',
        choices: ['Engineer', 'Intern', 'Done']
    }
];

module.exports = iQuestions;