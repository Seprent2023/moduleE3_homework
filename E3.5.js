function firstFunc(a) {
    return function(b) {
        return a + b
    }
}
const secondFunc = firstFunc(1);
const sumFunc = secondFunc(2);
console.log(sumFunc);