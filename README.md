# SVG Logo Maker

A command-line application to generate SVG logos.

## Description

This application allows users to generate an SVG logo by specifying text, text color, shape, and shape color. It supports shapes like circles, triangles, and squares.

## Table of Contents

- [SVG Logo Maker](#svg-logo-maker)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Demo](#demo)
  - [Project structure](#project-structure)

## Installation

1. Clone the repository:

 ```sh
 git clone https://github.com/surpritam/svg-logo-maker.git
 cd svg-logo-maker
  ```
2. Install the dependencies:
```sh
npm install
```
## Usage

1. Run the application:
```sh
node generateLogo.js
```
2. Follow the prompts to enter:
- Upto three characters for the text
- Text color (keyword or hexadecimal number)
- Shape (Circle, Triangle, and Square)
- Shape color (keyword or hexadecimal number)

3. The application will generate 'logo.svg' based on user inputs.

## Testing

To run the tests, use the following command:
```sh
npm test
```

## Demo
You can watch an example video demonstrating the usage of the SVG Logo Maker application [here](https://drive.google.com/file/d/1tFgeZvtYxLYbOdItLbVR1VYOMo-FWocn/view?usp=drive_link).

## Project structure
```
├── examples/           // Example SVG file(s) created with the app
├── lib/                // Folder for classes or functions
│   ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
│   ├── shapes.test.js  // Jest tests for shapes
│   └── svg.js          // Exports `Svg` class that will render the logo
│   └── svg.test.js     // Jest tests for `Svg`
├── .gitignore          // Indicates which folders and files Git should ignore
├── generateLogo.js     // Runs the application using imports from lib/
├── package.json
└── README.md           // App description, link to video, setup and usage instructions
```
