console.log("index.js repoting for class")
const fs = require('fs')
const axios = require('axios')
const inquirer = require('inquirer')
require('dotenv').config()

// INVOKE npm inquiere in the command line in the working directory 
inquirer
    // Programming the command line Prompts with the item that require user entry
    .prompt([{
        message: 'Enter your github username',
        name: 'username'
    },
    {
        message: 'Enter a title for your project',
        name: 'projectTitle'
    },
    {
        message: 'Enter a description for your project',
        name: 'Description'
    },
    {
        message: 'Enter all Installation instructions for your project',
        name: 'Installation'
    },
    {
        message: 'Enter a Usage which is the user benefits and how they use the app for your project',
        name: 'Usage'
    },
    {
        message: 'Enter a license for your project',
        name: 'License'
    },
    {
        message: 'Enter the Contributers for your project',
        name: 'Contributing'
    },
    {
        message: 'Enter all test attributes for your project',
        name: 'Tests'
    },
    {
        message: 'Enter the Questions for your project test',
        name: 'Questions'
    },
])
.then(function(data1) {
    // message: 'Enter your github username',
    // name: 'Username'
    const q1 = data1.username
    // message: 'Enter a title for your project',
    // name: 'projectTitle'
    const q2 = data1.projectTitle
    // message: 'Enter a description for your project',
    // name: 'Description'
    const q3 = data1.Description
    // message: 'Enter all Installation instructions for your project',
    // name: 'Installation'
    const q4 = data1.Installation
    //  message: 'Enter a Usage which is the user benefits and how they use the app for your project',
    // name: 'Usage'
    const q5 = data1.Usage
    // message: 'Enter a license for your project',
    // name: 'License'
    const q6 = data1.License
    // message: 'Enter a license for your project',
    // name: 'License'
    const q7 = data1.Contributing
    // message: 'Enter the Contributers for your project',
    // name: 'Contributing'
    const q8 = data1.Tests
    // message: 'Enter all test attributes for your project',
    // name: 'Tests'
    const q9 = data1.Questions
    // message: 'Enter the Questions for your project test',
    // name: 'Questions'
    // CID=d3e359
    // CS=e146e41
    const id1 = process.env.CID
    const id2 = process.env.CS
    const url = 'https://api.github.com/users/' + q1 + '?client_id=' + id1 + '&client_secret=' + id2
    axios.get(url).then(function(data2){
        console.log(data2.data)
        
        let email = data2.data.email
        let profileImage = data2.data.avatar_url
        let website = data2.data.blog
        
        

        const markdown = `## Project Title
            *${q3}
        ## Description 
            *${q2}
        ## TABLE OF CONTENTS
            * 1.01 Instalation
            * 1.02 Usage
            * 1.03 License
            * 1.04 Contributers
            * 1.05 Tests
            * 1.06 Questions
        ## Installation${q4}
        ## "[![Generic badge](https://img.shields.io/badge/KYLEDOVE" + ${website} + "-<COLOR>.svg)](https://shields.io/)]"
        ## Usage${q5}
        ## License${q6}
        ## Contributing${q7}
        ## Tests${q8}
        ## Questions ${q9}
        ## ![Profile Image](${profileImage})
        ## ${website}
        ## Email me at:${email}
        ## [![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://kyledove.com)`

        
        fs.writeFile("readme2.md", markdown, function(err){});
       
        
    
    })
})
