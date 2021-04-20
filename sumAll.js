let total = 0;
let firstInt = 10;
let secInt = [90, 1];
let bigNum = Math.max(firstInt, secInt);
let smolNum = Math.min(firstInt, secInt);

const sumAll = function () {
    if(firstInt < 0 || secInt < 0 || typeof(firstInt) !== 'number' || typeof(secInt) !== 'number'){
        return 'ERROR'
    }
    for (let i = bigNum; i >= smolNum; i--) {
        total += i;
    }
    return total;

}


module.exports = sumAll
