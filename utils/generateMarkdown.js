// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "None"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "None"){
    return `- [License](#license)`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "None"){
  return `##license
  
  My project is licensed with ${license} license`
}
return ""}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  ${renderLicenseLink(data.license)}

  ##description
  ${data.description}


##installation
${data.installation}

##usage
${data.usage}

##contributing
${data.contributing}

##questions
${data.questions}
contact me at ${data.email}
check out the rest of my work [${data.github}](https://github.com/${data.github})






  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
