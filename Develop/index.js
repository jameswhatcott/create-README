// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    "Title:",
    "Description:",
    "Installation Instructions:",
    "Usage:",
    "License:",
    "Test Instructions:",
    "Contribution Guidelines:",
     ];



// TODO: Create a function to write README file





// TODO: Create a function to initialize app
function init() {
  
  inquirer
  .prompt([
    {
      type: "input",
      message: `${questions[0]}`,
      name: "title",
    },
    {
        type: "input",
        message: `${questions[1]}`,
        name: "description"
    },
    {
        type: "input",
        message: `${questions[2]}`,
        name: "installation"
    },
    {
        type: "input",
        message: `${questions[3]}`,
        name: "usage"
    },
    {
        type: "list",
        message: `${questions[4]}`,
        name: "license",
        choices: ['MIT License', 'Apache License 2.0', 'BSD 2-Clause', 'BSD 3-Clause']
    },
    {
      type: "input",
      message: `${questions[5]}`,
      name: "test"
    },
    {
      type: "input",
      message: `${questions[6]}`,
      name: "contribution"
    },
  ])
  .then((response) => {
    console.log(response);
    fs.writeFile('README.md', generateREADME(response), (err) =>
    err ? console.error(err) : console.log('Success!')
    
  )});

}

function getLicenseBadge(license) {
  switch (license) {
    case 'MIT License':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Apache License 2.0':
      return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'BSD 2-Clause':
      return '![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)';
    case 'BSD 3-Clause':
      return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    default:
      return '';
  }
}



function generateREADME(response) {
  const licenseBadge = getLicenseBadge(response.license);
  
   return `
# ${response.title}

${licenseBadge}

## Description
${response.description}

# Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Test Instructions](#test-instructions)
- [Contribution Guidelines](#contribution-guidelines)
- [Questions](#questions)


## Installation
${response.installation}

## Usage
${response.usage}

## License
This project is licensed under the ${response.license}.

## Test Instructions
${response.test}

## Contribution Guidelines
${response.contribution}

## Questions
  `;
}

// Function call to initialize app
init();




  