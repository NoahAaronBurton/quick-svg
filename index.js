const inquirer = require('inquirer');

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