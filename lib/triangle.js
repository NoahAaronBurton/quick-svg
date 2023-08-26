const Shapes = require('./shapes');

class Triangle extends Shapes {
    constructor(characters,textColor, shapeColor,shape) {
        super(characters,textColor, shapeColor);
        this.shape = shape;
    }

    renderTriangleSVG() {
        let svg;
        svg = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />

        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
        </svg>
        `
        return svg;
    }
}

module.exports = Triangle; 