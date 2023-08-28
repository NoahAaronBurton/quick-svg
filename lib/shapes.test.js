const Triangle = require('./triangle');
const Circle = require('./circle');
const Square = require('./square');



describe('Triangle Test', () => {
    test('correctly renders triangle for user input', () => {
        const shape = new Triangle('aaa','red','blue','Triangle');
        const expectedSVG = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="red">aaa</text></svg>'
    
        expect(shape.renderTriangleSVG()).toEqual(expectedSVG);
    })
})

describe('Circle Test', () => {
    test('correctly renders circle for user input', () => {
        const shape = new Circle('aaa','red','blue','Circle');
        const expectedSVG = '<svg version="1.1"width="300" height="200"xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="transparent" /><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">aaa</text></svg>'
    
        expect(shape.renderCircleSVG()).toEqual(expectedSVG);
    })
})

describe('Square Test', () => {
    test('correctly renders square for user input', () => {
        const shape = new Square('aaa','red','blue','Square');
        const expectedSVG = '<svg version="1.1"width="300" height="200"xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="transparent" /><rect x="50" y="-50" width="200" height="200" fill="blue" /><text x="50%" y="50%" font-size="70" text-anchor="middle" fill="red">aaa</text></svg>'

        expect(shape.renderSquareSVG()).toEqual(expectedSVG);
    })
})