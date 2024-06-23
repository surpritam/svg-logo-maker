const inquirer = require('inquirer');
const fs = require('fs');

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
                shapeElement = `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
                break;
            case 'triangle':
                shapeElement = `<polygon points="150,50 100,150 200,150" fill="${shapeColor}" />`;
                break;
            case 'square':
                shapeElement = `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
                break;
        }
        const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shapeElement}
  <text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;

        fs.writeFileSync('logo.svg', svgContent.trim());
        console.log('Generated logo.svg');
    });
