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
            message: 'Write a short description of your project:',
        },
    ])
    .then((data) => {

        const readme = new Readme(data);
        readme.Write();
    });