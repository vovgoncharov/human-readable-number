module.exports = function toReadable(number) {
    const arr = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const arrNumber = [
        'zero',
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const arr3 = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let fNumber = number.toString()[0];
    let sNumber = number.toString()[1];
    let tNumber = number.toString()[2];
    if (typeof fNumber == "string" && number.toString().length === 1) {
        return arr[parseInt(fNumber)];
    } else if (typeof sNumber == "string" && number.toString().length == 2) {
        if (arr[parseInt(sNumber)] == "zero") {
            return `${arrNumber[parseInt(fNumber)]}`;
        } else if (number.toString()[0] == "1") {
            return `${arr3[parseInt(sNumber)]}`;
        } else {
            return `${arrNumber[parseInt(fNumber)]} ${arr[parseInt(sNumber)]}`;
        }
    } else if (typeof tNumber == "string" && number.toString().length == 3) {
        if (
            arr[parseInt(tNumber)] == "zero" &&
            arr[parseInt(sNumber)] == "zero"
        ) {
            return `${arr[parseInt(fNumber)]} hundred`;
        } else if (number.toString()[1] == "1") {
            return `${arr[parseInt(fNumber)]} hundred ${arr3[parseInt(tNumber)]}`;
        } else if (arr[parseInt(tNumber)] == "zero") {
            return `${arr[parseInt(fNumber)]} hundred ${arrNumber[parseInt(sNumber)]}`;
        } else if(arr[parseInt(sNumber)] == "zero"){
            return  `${arr[parseInt(fNumber)]} hundred ${arr[parseInt(tNumber)]}`
        }
        else {
            return `${arr[parseInt(fNumber)]} hundred ${arrNumber[parseInt(sNumber)]} ${arr[parseInt(tNumber)]}`;
        }
    }
};
