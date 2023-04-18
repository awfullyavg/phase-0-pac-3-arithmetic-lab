
let number = 5;

//Add function
function add(a, b) {
    return a + b;
}

//Subtract function
function subtract(a, b) {
    return a - b;

}

//Multiplication function
function multiply(a, b) {
    return a * b;

}

//Divide function
function divide(a, b) {
    return a / b;

}
//Increment
function increment(a) {
    return (a += 1);
}
//Decrement
function decrement(n) {
    return (n -= 1);
}
//Parse Int
function makeInt(string){
    return parseInt(string, 10);
}

function preserveDecimal(string) {
    return parseFloat(string);
}