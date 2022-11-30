const digitalDecipher = (eMessage, key) => {
    let inputArr = Array.from(eMessage);

    let numberFormat = inputArr.every(element => {
        return typeof element === 'number'
    })

    key = Array.from(String(key));
    key.forEach((element, index, key) => key[index] = parseInt(element));

    if (!numberFormat) inputArr.forEach((element, index) => inputArr[index] = element.charCodeAt());
    else inputArr.forEach((element, index, inputArr) => inputArr[index] = element+96);

    let output = Array.from(inputArr, (element, index) => {
        element = (element - 97 - key[index%key.length])%26;
        return String.fromCharCode(element + 97);
    })

    return output.join('');
}


console.log(digitalDecipher([6, 4, 1, 3, 9, 20], 100));