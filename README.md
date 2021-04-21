# 10-Team-Profile-Generator

# Description
 
# Table of Contents
1. [Title](Title)
2. [Description](#description)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contribution)
6. [Tests](#tests)
7. [Questions](#questions)
8. [License](#demo)
9. [Demo](#demo)
10. [Screenshot](#screenshot)
# Installation 
I used 'npm i' to insall all required pacakages.
## Usage
Input 'node index.js' into your bash/terminal to generate questions.
# Contribution
Myself
# Tests
I used 'npm test' to run tests.
# Questions
## GitHub 
 Lyndseyfin
## Email 
 lyndseyfinamore@gmail.com

## License
![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen)

## Demo
<a href= "">Demo</a>

## Screenshot
![screenshot]()

const path = require("path");
const fs = require("fs");
const generateHTML = require("../src/generateHTML");

// const templatesDir = path.resolve(_dirname, "../templates");

const render = employees => {

    const html = [];

    html.push(...employees
        .filter(employee => employee.getRole() === "manager")//renturns an array of elements who callback only returns a truthy value
        .map(manager => renderManager(manager))//allows you to loop over the array and modify elements inside of the array 
    );

    html.push(...employees
        .filter(employee => employee.getRole() === "engineer")
        .map(engineer => renderEngineer(engineer))
    );

    html.push(...employees
        .filter(employee => employee.getRole() === "intern")
        .map(intern => renderIntern(intern))
    );


return renderMain(html.join(""));

};


const renderManager = manager => {
    let template = fs.readFileSync(path.resolve,"utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "office", manager.getOfficeNumber());
    return template;
};

const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve("engineer.html"), "utf8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "role", engineer.getRole());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "github", engineer.getGithub());
    return template;
};

const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve("intern.html"), "utf8");
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "role", intern.getRole());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "school", intern.getSchool());
    return template;
};

const renderMain = html => {
    const template = fs.readFileSync(path.resolve("test.html"), "utf8");
    return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
};


module.exports = render;