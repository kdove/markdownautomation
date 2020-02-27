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
        var badge = badge1 

        const markdown = `## Description\n\n##${q2}\n\n##${q3}\n\n\##Author${name}\n\n##TABLE OF CONTENTS\n\n\t * 1.01 Instalation \n\n\t * 1.02 Usage \n\n\t * 1.03 License \n\n\t * 1.04 Contributers \n\n\t * 1.05 Tests \n\n\t* 1.06 Questions \n\n\ ##Installation ${q4} !{?style=for-the-badge&logo=appveyor} \n\n\ ## Usage ${q5} \n\n ## License ${q6} \n\n ## Contributing ${q7} \n\n ## Tests ${q8} \n\n ## Questions ${q9} \n\n ## ![Profile Image](${profileImage}) \n\n\ ## ${website} \n\n\ ## Email me at: ${email}\n [![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://kyledove.com)`

        
        fs.writeFile("readme2.md", markdown, function(err){});
       
        
    
    })
})
