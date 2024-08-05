let createCounter = function (init) {
    let n = init
    const increment = () => {
        n++
        return n
    }
    const decrement = () => {
        n--
        return n
    }
    const reset = () => {
        n = init
        return n
    }
    return { increment, decrement, reset}
};
