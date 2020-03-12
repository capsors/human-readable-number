module.exports = function toReadable(number) {
    let dictionaty = {
        0: "", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten",
        11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen",
        19: "nineteen", 20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety"
    };
    if(number == 0) return 'zero'
    if (number <= 20) {
        return dictionaty[number];
    }

    else if (20 < number && number < 100) {
        let tens = Math.floor(number / 10) * 10;
        let ones = number % 10;
        return dictionaty[tens] + " " + dictionaty[ones];
    }

    else {
        let hundreds = Math.floor(number / 100) * 100;
        if (number - hundreds <= 20) {
            return dictionaty[(hundreds / 100)] + " hundred " + dictionaty[(number - hundreds)];
        }
        else {
            let tens = (Math.floor((number - hundreds) / 10)) * 10;
            let ones = (number - hundreds) % 10;
            return dictionaty[(hundreds / 100)] + " hundred " + dictionaty[tens] + " " + dictionaty[ones];
        }
    }
}

