const inquirer = require('inquirer');
const Readme = require('./readme')

inquirer
    .prompt([{
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a short description of the project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage for the tool:',
        },
        {
            type: 'list',
            message: 'Which license was used in this project?',
            name: 'license',
            choices: ['ISC', 'MIT', 'ODBl'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please provide instructions for contributing to the project:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide instructions on how to test the project:',
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GITHUB user name?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is your email address?',
        },
    ])
    .then((data) => {
        const readme = new Readme(data);
        readme.Write();
    });