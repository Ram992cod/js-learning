function add(a, b) {
    return a + b;
}

function calculate(a, b, fun) {
    return fun(a, b);
}

console.log(calculate(5, 6, add));

console.log('test');