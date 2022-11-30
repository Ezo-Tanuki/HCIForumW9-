const digitalDecipher = (eMessage, key) => {
    let input = Array.from(eMessage);

    let numberFormat = input.every(element => {
        return typeof element === 'number';
    })

    key = Array.from(String(key), Number);

    if (!numberFormat) input.forEach((element, index, input) => input[index] = element.charCodeAt());
    else input.forEach((element, index, input) => input[index] = element+96);

    let output = Array.from(input, (element, index) => {
        element = (element - 97 - key[index%key.length] + 26)%26;
        return String.fromCharCode(element + 97);
    })

    return output.join('');
}

console.log(digitalDecipher([20, 12, 18, 30, 21] , 1939));
console.log(digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990));
console.log(digitalDecipher([6, 4, 1, 3, 9, 20], 100));