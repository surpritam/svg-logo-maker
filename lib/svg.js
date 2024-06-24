class Svg {
    constructor(shapeElement, textColor, text) {
        this.shapeElement = shapeElement;
        this.textColor = textColor;
        this.text = text;
    }

    render() {
        return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${this.shapeElement}
  <text x="150" y="125" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
    }
}
module.exports = { Svg };