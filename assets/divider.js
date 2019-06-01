const box = require("./box.json");
const chalk = require("chalk");


const dividerObject =function(num, defaultColor, back) {
  this.length = num;
  this.color = defaultColor;
  const {
    topLeft,
    topRight,
    bottomRight,
    bottomLeft,
    vertical,
    horizontal
  } = box;

  this.printTop = () => {
    console.log(
      back(chalk[`${this.color}`](
        topLeft + horizontal.repeat(this.length) + topRight
      ))
    );
  };
  this.printBottom = () => {
    console.log(
      back(chalk[`${this.color}`](
        bottomLeft + horizontal.repeat(this.length) + bottomRight
      ))
    );
  };
  this.printLine = () => {
    console.log(back(
      vertical +
        chalk[`${this.color}`](horizontal.repeat(this.length)) +
        vertical
    ));
  };
  this.printVertical = () => {
    console.log(back(chalk[`${this.color}`](vertical.repeat(this.length))));
  };
  this.containString = (string, color) => {
    return (
      back(chalk[`${this.color}`](vertical) +
      color(string.padEnd(this.length)) +
      chalk[`${this.color}`](vertical)
    ));
  };
};

module.exports = dividerObject;
