let expect = function (val) {
    const notToBe = function (n) {
        if (n !== val) {
            return true
        } else {
             throw new Error('Equal')
        }
    }
    const toBe = function (n) {
        if (n === val) {
            return true
        } else {
             throw new Error('Not Equal')
        }
    }
    return {toBe, notToBe}
}
