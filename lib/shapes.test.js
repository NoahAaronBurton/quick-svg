// Each shape class should be tested for a render() method that
// ...returns a string for the corresponding SVG file with the given shape color.

const Triangle = require('./triangle');



describe('Triangle Test', () => {
    test('correctly renders triangle for user input', () => {
        const shape = new Triangle('aaa','red','blue','Triangle');
        const expectedSVG = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="red">aaa</text></svg>'
    
        expect(shape.renderTriangleSVG()).toEqual(expectedSVG);
    })
})

