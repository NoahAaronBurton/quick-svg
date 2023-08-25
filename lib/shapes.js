class Shapes {
    constructor(characters,textColor, shapeColor) {
    this.characters = characters;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    }

    // common methods
    renderInfo() {
    console.log(`Rendering shape: ${this.shape}`);
    console.log(`Characters: ${this.characters}`);
    console.log(`Text Color: ${this.textColor}`);
    console.log(`Shape Color: ${this.shapeColor}`);

    }

    //! should set shape go here?
    // setShape(shape) {
    //     this.shape= shape;
    //      return shape;
    // }
    
}
module.exports = Shapes;