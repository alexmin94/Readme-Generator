// TODO: Include packages needed for this application
const fs = require("fs")
const path = require ("path")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "what's the title of your application"
    },
    {
        type: "input",
        name: "description",
        message: "leave a description of your application"
    },
    {
        type:"input",
        name: "usage",
        message: "how is this app used"
    },
    {
        type: "input",
        name: "installation",
        message: "do you need to install anything to run the app"
    },
    {
        type: "input",
        name: "contributing",
        message: "are there any contributors on this app"
    },
    {
        type: "input",
        name: "email",
        message: "eenter your email address"
    },
        {
            type: "name",
            name: "github",
            message: "enter your github username"
        },
        {
            type: "input",
            name: "questions",
            message: "do you have any questions"
        },
    {
        type: "list",
        name: "license",
        message: "how do you want to lisence this application",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']

    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
    console.log("I'm here")
    writeToFile("README.md",generateMarkdown({...answers}))
})

}

// Function call to initialize app
init();
