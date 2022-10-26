const inquirer = require('inquirer');
const fs = require('fs');

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
    console.log(answers)

fs.writeFile('README.md', generateMarkdown(answers), (err) => err ? console.log(err) : console.log('Successfully created README!'))
})

function getlicensebadge (answers) {   

    let mitBlue = 'https://img.shields.io/badge/license-MIT-blue'
    let apache = 'https://img.shields.io/badge/license-Apache_2.0-orange'
    let gnu = 'https://img.shields.io/badge/license-GNU_v3.0-brightgreen'
  
    let licenseLink = answers.license
   
    if (licenseLink === 'MIT') {
    return mitBlue;
    } else if (licenseLink === 'Apache License 2.0') {
      return apache;
    } else if (licenseLink === 'GNU General Public License v3.0') 
      return gnu;
  } 

function getlicenseNotice (answers) {

    let mitNotice = "Copyright <YEAR> <COPYRIGHT HOLDER>. Licensed under the MIT license."
    let apacheNotice = "Copyright [yyyy] [name of copyright owner] Licensed under the Apache License, Version 2.0 (the 'License')"
    let gnuNotice = "Copyright (C) <year>  <name of author> Licensed under the GNU v3.0 General Public License, see <https://www.gnu.org/licenses/>."
  
  
  let licenseNotice = answers.license
  
  
  if (licenseNotice === 'MIT') {
      return mitNotice;   
  } else if (licenseNotice === 'Apache License 2.0') {
      return apacheNotice;
  } else if (licenseNotice === 'GNU General Public License v3.0') {
      return gnuNotice;
  } 
  }

function generateMarkdown(data) {
    return `# **${data.title}**

![${data.license}](${getlicensebadge(data)})

## Description
${data.description}

## Table of Contents

* ### [Installation](#installation)
* ### [Usage](#usage)
* ### [License](#license)
* ### [Contributing](#contributing)
* ### [Tests](#tests)
* ### [Questions](#questions)


## Installation
${data.installation}

## Usage
${data.usage}

## License
${getlicenseNotice(data)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, feel free to reach out via [GitHub](https://gitub.com/${data.github}) or email me to ${data.email}`

};





