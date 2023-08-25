const Shapes = require('./shapes')

class Circle extends Shapes {
    constructor(characters,textColor, shapeColor,shape) {
        super(characters,textColor, shapeColor);
        this.shape = shape;
    }

    renderCircleSVG() {
    console.log(`Rendering shape: ${this.shape}`);
    console.log(`Characters: ${this.characters}`);
    console.log(`Text Color: ${this.textColor}`);
    console.log(`Shape Color: ${this.shapeColor}`);

    //todo: generate svg
    let svg;
    svg = `
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

     <rect width="100%" height="100%" fill="transparent" />

     <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />

     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>

    </svg>
    `
    return svg;
    }
}

module.exports = Circle;