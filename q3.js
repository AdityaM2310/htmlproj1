function swapCase(str) {
    var swappedStr = '';
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (char === char.toUpperCase()) {
            swappedStr += char.toLowerCase();
        } else {
            swappedStr += char.toUpperCase();
        }
    }
    return swappedStr;
}
var inputString = 'The Quick Brown Fox';
var outputString = swapCase(inputString);
console.log("Input String:", inputString);
console.log("Output String:", outputString);