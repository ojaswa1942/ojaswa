const box = require("./box.json");
const chalk = require("chalk");

String.prototype.centerJustify = function( length, char ) {
    var i=0;
  var str= this;
  var toggle= true;
    while ( i + this.length < length ) {
      i++;
    if(toggle)
      str = str+ char;
    else
      str = char+str;
    toggle = !toggle;
    }
    return str;
}

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
      back(color(string.centerJustify(this.length+2, ' '))
    ));
  };
};

module.exports = dividerObject;
