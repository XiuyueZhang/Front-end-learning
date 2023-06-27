var createCounter = function(n) {
    return function() {
        return n++
    };
};

const counter = createCounter(10)
// counter() // 10
console.log(counter())
// counter() // 11
console.log(counter())
// counter() // 12
console.log(counter())
