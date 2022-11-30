const digitalDecipher = (eMessage, key) => {
    let input = eMessage;

    let numberFormat = input.every(element => {
        return typeof element === 'number'
    })

    key = Array.from(String(key));
    key.forEach((element, index, key) => key[index] = parseInt(element));

    if (!numberFormat) input.forEach((element, index, input) => input[index] = element.charCodeAt());
    else input.forEach((element, index, input) => input[index] = element+96);

    let output = Array.from(input, (element, index) => {
        element = (element - 97 - key[index%key.length])%26;
        return String.fromCharCode(element + 97);
    })

    return output.join('');
}


console.log(digitalDecipher([6, 4, 1, 3, 9, 20], 100));