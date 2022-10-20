const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = ({ name, description, installation, usage, contributing, tests, license, github, email }) =>

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Enter the description:',
      name: 'description',
    },
    {
        type: 'input',
        message: 'Enter your installation instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter the usage information:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter the contribution guidelines:',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Enter the test instructions',
        name: 'tests',
      },
    {
      type: 'list',
      message: 'Choose a license from the following:',
      name: ['MIT', 'Apache',]
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },

  ])
 
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });  