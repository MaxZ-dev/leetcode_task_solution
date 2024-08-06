let once = function (fn) {
    let counter = 0
    return function (...args) {
        if (counter > 0) {
            return undefined
        } else {
            counter++
            return fn(...args)
        }
    }
};
