const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shapes.js');
const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');

const isValidHexcode = hexCode => {
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
    {
        name: 'shapeColor',
        type: 'input',
        message: 'Enter a color keyword(`blue`,`red` etc...) or a hexadecimal code (`#ffffff`) for the shape color',
        validate: function(input) {
            if(isValidKeyword(input) || isValidHexcode(input)) {
                return true;
            } else {
                return 'Color key word not recognized, or invalid hex code. Please try again...'            
            }
        }
    },
]

function init() {
    const welcomeText = console.log('Welcome to this app!!')
}

init();

function writeSvg(fileName, data) {
    fs.writeFile(fileName,data,(err) => {
        if (err) { // w3 schools helped me with this err check
            console.error('Error writing to file:', err);
          } else {
            console.log('data written to file!')
          }
    })
};

inquirer
    .prompt(questions)
    .then(function (data){
        console.log(data)
        //todo: call class method to generate svg?
        const svg = '';

        const characters = data.characters;
        const textColor = data.textColor;
        const shape = data.shape;
        const shapeColor = data.shapeColor;

        //todo: conditional statement to call correct shape sub-class
        if (data.shape === 'Circle') {
            const circleInstance = new Circle(characters, textColor, shapeColor, shape);
            const generatedSvG= circleInstance.renderCircleSVG();
            console.log(generatedSvG);
            writeSvg('icon.svg', generatedSvG);
        } if (data.shape === 'Square') {
            const squareInstance = new Square(characters, textColor, shapeColor, shape);
            const generatedSvG = squareInstance.renderSquareSVG();
            writeSvg('icon.svg', generatedSvG);
        } else { console.log('triangle')}

       

        
    })
    .catch((error) => { // this block taken from inquirer documentation
        if (error.isTtyError) {
            console.log('Prompt couldnt be rendered in the current environment... \n')
        } else {
            console.log('Something went wrong... \n')
          
        }
      });     