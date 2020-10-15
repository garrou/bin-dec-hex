const input = document.getElementById('input');
const result = document.getElementById('result');
const type = document.getElementById('type');

/**
 * Convert decimal number to binary number
 * @param {string} decimal number decimal to convert in binary
 */
const toBinary = (decimal) => {
    for (let i = 0; i < decimal.length; i++) {
        if (!(decimal[i]).match(/[0-9]/)) {
            return 0;
        }
    }
    let binary = "";
    while (decimal >  0) {
        binary += decimal % 2;
        decimal = parseInt(decimal / 2);
    }
    return binary.split('').reverse().join('');
}

/**
 * Convert binary to decimal number
 * @param {string} binary number binary to convert in decimal
 */
const toDecimal = (binary) => {
    for (let i = 0; i < binary.length; i++) {
        if (!['0','1'].includes(binary[i])) {
            return 0;
        }
    } 
    let decimal = 0;
    binary.split('').reverse().forEach((e, i) => { e === '1' ? decimal += Math.pow(2,i) : 0});
    return decimal;
}

/**
 * Launch convert
 */
const convert = () => {
    if (input.value.length !== 0) {
        if (type.value === 'decimal') {
            result.value = toDecimal(input.value);
        } else if (type.value === 'binary') {
            result.value = toBinary(input.value);
        }
    }
}

input.addEventListener('input',convert);
type.addEventListener('change',convert);
