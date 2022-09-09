const input = document.getElementById('input');
const result = document.getElementById('result');
const type = document.getElementById('type');
const hexaString = "0123456789ABCDEF";

/**
 * Convert a number to hexadecimal
 * @param {Number} decimal number to convert
 * @return {String}
 */
const decimalToHexadecimal = (decimal) => {
    let res = '';

    while (decimal > 0) {
        res = hexaString[decimal % 16] + res;
        decimal = parseInt(decimal / 16);
    }
    return res == '' ? '0' : res;
}

/**
 * Convert hexadecimal number to decimal number
 * @param {String} hexadecimal hexadecimal number to convert in decimal
 * @return {Number}
 */
const hexadecimalToDecimal = (hexadecimal) => {

    hexadecimal = hexadecimal
        .toUpperCase()
        .replace('0X', '');
    
    for (let letter of hexadecimal) {
        if (hexaString.indexOf(letter) < 0) {
            return 0;
        }
    }
    let decimal = 0;

    hexadecimal
        .split('')
        .reverse()
        .forEach((e, i) => decimal += Math.pow(16, i) * hexaString.indexOf(e));

    return decimal;
}

/**
 * Convert decimal number to binary number
 * @param {String} decimal decimal number to convert in binary
 * @return {String}
 */
const decimalToBinary = (decimal) => {

    for (let letter of decimal) {
        if (!(letter).match(/[0-9]/)) {
            return 0;
        }
    }
    let binary = '';

    while (decimal > 0) {
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
 * @param {String} binary number binary to convert in decimal
 */
const binaryToDecimal = (binary) => {

    for (let letter of binary) {
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
            case 'binDec': 
                result.value = binaryToDecimal(input.value);
                break;
            case 'decBin':
                result.value = decimalToBinary(input.value);
                break;
            case 'hexDec':
                result.value = hexadecimalToDecimal(input.value);
                break;
            case 'decHex':
                result.value = decimalToHexadecimal(input.value);
                break;
        }
    }
}

input.addEventListener('input', convert);
type.addEventListener('change', convert);