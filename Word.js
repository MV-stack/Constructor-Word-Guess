var Letter = required("/Letter.js");

function Word(value) {
    var divider = "\n------------------------------------------------\n\n";
    this.array = [];
    for(var i = 0; i < value.length; i++) {
        var letter = new Letter(value[i]);
        this.array.push(letter);
    }
    this.log = function () {
        var logValues = "";
        for(var i = 0; i < this.array.length; i++) {
            logValues += this.array[i] + " ";
        } console.log(logValues + divider);
    }
    this.guess = function (input) {
        for(var i = 0; i < this.array.length; i++) {
            this.array[i].guess(input);
        }        
    }
};
module.exports = Word;