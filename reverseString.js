let inputString = '';
const reverseString = function() {
    let splitString = inputString.split('');
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join('');

    return joinArray;
}

module.exports = reverseString
