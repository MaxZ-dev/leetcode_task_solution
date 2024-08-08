let canBeEqual = function(target, arr) {
    const countOccurrences = (array) => {
        return array.reduce((acc, num) => {
            acc[num] = (acc[num] || 0) + 1;
            return acc;
        }, {});
    };

    return JSON.stringify(countOccurrences(target)) === JSON.stringify(countOccurrences(arr));
}
