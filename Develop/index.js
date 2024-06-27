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

function generateREADME ({title, description, installation, usage, license, test, contribution}) {
    `#${title}

    ##Description
    ${description}

    ##Installation
    ${installation}

    ##Usage
    ${usage}

    ##License
    ${license}

    ##Test Instructions
    ${test}

    ##Contribution Guidelines
    ${contribution}
    `
}


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
        type: "input",
        message: `${questions[4]}`,
        name: "license"
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

// Function call to initialize app
init();




  