const input = document.getElementById('input');
const result = document.getElementById('result');
const type = document.getElementById('type');
const letters = new Map();

letters.set('A', 10);
letters.set('B', 11);
letters.set('C', 12);
letters.set('D', 13);
letters.set('E', 14);
letters.set('F', 15);

/**
 * Convert hexadecimal number to decimal number
 * @param {string} hexadecimal hexadecimal number to convert in decimal
 */
const hexadecimalToDecimal = (hexadecimal) => {

    hexadecimal = hexadecimal
        .toUpperCase()
        .replace('0X', '');
    
    for (let letter of hexadecimal) {
        if (!letters.has(letter)) {
            return 0;
        }
    }
    let decimal = 0;

    hexadecimal
        .split('')
        .reverse()
        .forEach((e, i) => decimal += Math.pow(16, i) * letters.get(e));

    return decimal;
}

/**
 * Convert decimal number to binary number
 * @param {string} decimal decimal number to convert in binary
 */
const decimalToBinary = (decimal) => {

    for (let letter of decimal) {
        if (!(letter).match(/[0-9]/)) {
            return 0;
        }
    }
    let binary = '';

    while (decimal >  0) {
        binary += decimal % 2;
        decimal = parseInt(decimal / 2);
    }
    return binary
            .split('')
            .reverse()
            .join('');
}

/**
 * Convert binary to decimal number
 * @param {string} binary number binary to convert in decimal
 */
const binaryToDecimal = (binary) => {

    for (let letter of decimal) {
        if (!['0','1'].includes(letter)) {
            return 0;
        }
    }
    let decimal = 0;

    binary
        .split('')
        .reverse()
        .forEach((e, i) => { e === '1' ? decimal += Math.pow(2, i) : 0});

    return decimal;
}

const convert = () => {

    if (input.value.length !== 0) {
        switch (type.value) {
            case 'decimal': 
                result.value = binaryToDecimal(input.value);
                break;
            case 'binary':
                result.value = decimalToBinary(input.value);
                break;
            case 'hexadecimal':
                result.value = hexadecimalToDecimal(input.value);
                break;
        }
    }
}

input.addEventListener('input', convert);
type.addEventListener('change', convert);