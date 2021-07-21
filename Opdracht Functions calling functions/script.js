const scream = function(){
    console.log('Aaaaaaa!')

};

scream();
const makeNoise = function(){
        scream();

};
makeNoise();

/*const add = function(numberA, numberB){
    return numberA + numberB;
};
const eight = add(3,5);
console.log (eight);

const doCalculation = function(){
    const six = add(2,4);
    console.log (six);
};
doCalculation ();*/

const makePositive = function(number) {
    console.log("Entering makePositive..");
    if (number < 0) {
        return Math.abs(number);
    }
    return number;
};

const makeBigger = function(number) {
    console.log("Entering makeBigger..");
    if (number < 10) {
        return 10 + number;
    }
    return number;
};

const square = function(number) {
    console.log("Entering square..");
    return number * number;
};

const doComplexCalculation = function(number) {
    console.log("Entering doComplexCalculation..");
    const positiveNumber = makePositive(number);
    const bigNumber = makeBigger(positiveNumber);
    const squaredNumber = square(bigNumber);
    return squaredNumber;
};

console.log(doComplexCalculation(-1));