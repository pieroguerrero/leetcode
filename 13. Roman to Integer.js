/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

    let result = 0;
    let ant = 0;
    let i, current;

    const mapRomans = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    for (i = s.length - 1; i >= 0; i--) {

        current = mapRomans[s[i]];

        if (ant > current) {
            result -= current;
        } else {
            result += current;
        }

        ant = current;

    }

    return result;

};


console.log(romanToInt("LVIII"));