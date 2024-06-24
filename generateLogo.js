const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');
const { Svg } = require('./lib/svg');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:',
            validate: function (input) {
                if (input.length > 3) {
                    return 'Please enter no more than three characters.';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (color keyword or hexadecimal number):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (color keyword or hexadecimal number):',
        },
    ])
    .then((data) => {
        const { text, textColor, shape, shapeColor } = data;

        let shapeElement;
        switch (shape) {
            case 'circle':
                shapeElement = new Circle;
                break;
            case 'triangle':
                shapeElement = new Triangle;
                break;
            case 'square':
                shapeElement = new Square;
                break;
        }
        shapeElement.setColor(shapeColor);
        const svgContent = new Svg(shapeElement.render(),textColor, text);

        fs.writeFileSync('logo.svg', svgContent.trim());
        console.log('Generated logo.svg');
    });
