const Shapes = require('./shapes');

class Square extends Shapes {
    constructor(characters,textColor, shapeColor,shape) {
        super(characters,textColor, shapeColor);
        this.shape = shape;
    }

    renderSquareSVG() {
        let svg;
        svg = `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
     
       <rect width="100%" height="100%" fill="transparent" />
     
       <rect x="50" y="-50" width="200" height="200" fill="${this.shapeColor}" />
        <text x="50%" y="50%" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
       </svg>
    `
    return svg;
    }
    
}

module.exports = Square;