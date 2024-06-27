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
    "Contribution Guidelines:",
    "Test Instructions:"
     ];

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
        name: "License"
    },
  ])
  .then((response) => {
    console.log(response);
    fs.writeFile('README.md', generateREADME(response), (err) =>
    err ? console.error(err) : console.log('Success!')
    
  )});

// TODO: Create a function to write README file

function generateREADME (questions) {
    `#`${questions[0]}`
    ##Description
    `{questions[1]}`
    `
}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();




  