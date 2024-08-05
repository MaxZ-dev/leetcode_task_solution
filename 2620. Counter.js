let createCounter = function (n) {
    let m = 1
    return function () {
        Number.isInteger(n) ? m++ : m === m
        return n + m - 2
    };
};
