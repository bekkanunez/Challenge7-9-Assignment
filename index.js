const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = ({ title, installation, usage, contributing, tests, license, github, email }) =>



`# ${title}

![${license}](${licenseLink})

## Table of Contents

* ### [Installation](#Installation)
* ### [Usage](#Usage)
* ### [License](#License)
* ### [Contributing](#Contributing)
* ### [Tests](#Tests)
* ### [Questions](#Questions)


## Installation
${installation}

## Usage
${usage}

## License
${licenseNotice}

## Contributing
${contributing}

## Tests
${tests}

## Questions
[GitHub](https://gitub.com/${github})
${email}`;


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
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
      name: 'license',
      choices: ['MIT', 'Apache License 2.0', 'GNU General Public License v3.0'],
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
    console.log(answers.license)

let licenseLink = answers.license

  let mitBlue = 'https://img.shields.io/badge/license-MIT-blue'
  let apache = 'https://img.shields.io/badge/license-Apache_2.0-orange'
  let gnu = 'https://img.shields.io/badge/license-GNU_v3.0-brightgreen'
 
  if (licenseLink === 'MIT') {
  console.log(mitBlue);
  } else if (licenseLink === 'Apache License 2.0') {
    console.log(apache);
  } else (licenseLink === 'GNU General Public License v3.0') 
    console.log(gnu);
  


  let mitNotice = "Copyright <YEAR> <COPYRIGHT HOLDER>. Licensed under the MIT license."
  let apacheNotice = "Copyright [yyyy] [name of copyright owner] Licensed under the Apache License, Version 2.0 (the 'License')"
  let gnuNotice = "Copyright (C) <year>  <name of author> Licensed under the GNU v3.0 General Public License, see <https://www.gnu.org/licenses/>."


let licenseNotice = answers.license


if (licenseNotice === 'MIT') {
    console.log(mitNotice);   
} else if (licenseNotice === 'Apache License 2.0') {
    console.log(apacheNotice);
} else (licenseNotice === 'GNU General Public License v3.0') 
    console.log(gnuNotice);

})

.then((answers) => {
    const readmePage = generateReadme(answers);

    fs.writeFile('README.md', readmePage, (err) =>
      err ? console.log(err) : console.log('Successfully created README!')
    );
  });  