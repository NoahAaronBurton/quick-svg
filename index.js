const inquirer = require('inquirer');

const isValidHexcode = hexCode => {
    // todo: add rules here
    const hexRules = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/; // chat GPT wrote this check for me 
    return hexRules.test(hexCode);
}


const isValidKeyword = keyword => {
    const colors = [
        'red',
        'green',
        'yellow',
        'orange',
        'purple',
        'pink',
        'brown',
        'black',
        'white',
        'gray',
        'blue',
    ]

    if (colors.includes(keyword)) {
        return true;
    } else {
        return false;
    }
}
    
    

const questions = [
    {
        name: 'characters',
        type: 'input',
        message: 'Enter up to three characters',
        validate(input) {
            if(input.length <=3 ) {
               
                return true;
            } else {
                console.log('')
               return 'Maximum length is three characters \n';
            }      
        }
    },
    {
        name: 'textColor',
        type: 'input',
        message: 'Enter a color keyword(`blue`,`red` etc...) or a hexadecimal code (`#ffffff`) for the text color',
        validate: function(input) {
            if(isValidKeyword(input) || isValidHexcode(input)) {
                return true;
            } else {
                return 'Color key word not recognized, or invalid hex code. Please try again...'
            }
        }
    },
    {
        name: 'shape',
        type: 'rawlist',
        message: 'Select a shape',
        choices : [
           'Circle',
           'Triangle',
           'Square', 
        ]
    },
]

function init() {
    const welcomeText = console.log('Welcome to this app!!')
}

init();

inquirer
    .prompt(questions)
    .then(function (data){
        console.log('questions completed.')
    })
    .catch((error) => { // this block taken from inquirer documentation
        if (error.isTtyError) {
            console.log('Prompt couldnt be rendered in the current environment... \n')
        } else {
            console.log('Something went wrong... \n')
          
        }
      });