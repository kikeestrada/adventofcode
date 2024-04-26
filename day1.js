// This function processes a single line to extract the calibration value.
function getCalibrationValue(line) {
    // We use a regular expression to find all the digits in the line.
    const digits = line.match(/\d/g);
    console.log(`Digits found in "${line}":`, digits);  // Let's see what digits are found

    if (digits && digits.length >= 1) {
        // Extract the first digit and assume it's also the last if there's only one.
        const firstDigit = digits[0];
        const lastDigit = digits.length > 1 ? digits[digits.length - 1] : firstDigit;
        // Form a two-digit number and convert it to an integer.
        const calibrationValue = Number(`${firstDigit}${lastDigit}`);
        console.log(`Calibration value for "${line}":`, calibrationValue); // Check the formed number
        return calibrationValue;
    }

    return 0; // Return 0 if there are no digits.
}

// This function sums up the calibration values of all lines.
function sumOfCalibrationValues(lines) {
    // We use `reduce` to sum up the calibration values from each line.
    return lines.reduce((accumulator, currentLine) => {
        return accumulator + getCalibrationValue(currentLine);
    }, 0);
}

// Example lines to process and calculate the total calibration value.
const exampleLines = [
    "1abc2",
    "pqr3stu8vwx",
    "a1b2c3d4e5f",
    "treb7uchet",
    "treb1uchet"
];

const result = sumOfCalibrationValues(exampleLines);
console.log("The total sum of calibration values is:", result);
