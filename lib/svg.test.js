const Svg = require('./svg');

test('SVG render', () => {
    const shapeElement = '<circle cx="150" cy="100" r="50" fill="green" />';
    const textColor = 'red';
    const text = 'SVG';
    const svg = new Svg(shapeElement, textColor, text);
    expect(svg.render()).toEqual(`
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shapeElement}
  <text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`);
});