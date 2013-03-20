function literalValue(romanLiteral) {
    if (romanLiteral === "") {
        return 0;
    } else if (romanLiteral === "I") {
        return 1;
    } else if (romanLiteral === "V") {
        return 5;
    } else if (romanLiteral === "X") {
        return 10;
    } else if (romanLiteral === "L") {
        return 50;
    } else if (romanLiteral === "C") {
        return 100;
    } else if (romanLiteral === "D") {
        return 500;
    } else if (romanLiteral === "M") {
        return 1000;
    } else if (romanLiteral === "V̄") {
        return 5000;
    } else if (romanLiteral === "X̄") {
        return 10000;
    } else if (romanLiteral === "L̄") {
        return 50000;
    } else if (romanLiteral === "C̄") {
        return 100000;
    } else if (romanLiteral === "D̄") {
        return 500000;
    } else if (romanLiteral === "M̄") {
        return 1000000;
    } else if (romanLiteral === "V̄̄") {
        return 5000000;
    } else if (romanLiteral === "X̄̄") {
        return 10000000;
    } else if (romanLiteral === "L̄̄") {
        return 50000000;
    } else if (romanLiteral === "C̄̄") {
        return 100000000;
    } else if (romanLiteral === "D̄̄") {
        return 500000000;
    } else if (romanLiteral === "M̄̄") {
        return 1000000000;
    } else {
        throw new Error("Unsupported Roman literal: " + romanLiteral);
    }

}

function splitUnicodeStringIntoArray(string) {
    var result = [];
    for (var i = 0; i < string.length; i++) {
        var c = string.charAt(i);
        if (c === "\u0304") {
            result[result.length-1] = result[result.length-1] + c;
        } else {
            result.push(c);
        }
    }
    return result;

}
function romanToDecimal(romanInput) {

    var result = 0;
    var array = splitUnicodeStringIntoArray(romanInput);
    for (var i = 0; i < array.length; i++) {
        var romanLiteral = array[i];
        var currentLiteralValue = literalValue(romanLiteral);
        var nextIndex = i + 1;
        var nextLiteral = nextIndex < array.length ? array[nextIndex] : "";
        var nextLiteralValue = literalValue(nextLiteral);
        if (nextLiteralValue > currentLiteralValue) {
            var currentAndNextCalculatedValue = nextLiteralValue - currentLiteralValue;
            result += currentAndNextCalculatedValue;
            i++;
        } else {
            result += currentLiteralValue;
        }
    }

    return result;
}

module.exports = romanToDecimal;
