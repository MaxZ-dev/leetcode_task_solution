let spiralMatrixIII = function (rows, cols, rStart, cStart) {
    const ans = [[rStart, cStart]];
    let i = rStart;
    let j = cStart;

    const increment = () => {
        if (i >= 0 && i < rows && j >= 0 && j < cols) {
            ans.push([i, j]);
        }
    };

    let k = 2;
    while (ans.length !== rows * cols) {
        j++;
        increment();
        for (let count = 0; count < k - 1; count++) {
            i++;
            increment();
        }
        for (let count = 0; count < k; count++) {
            j--;
            increment();
        }
        for (let count = 0; count < k; count++) {
            i--;
            increment();
        }
        for (let count = 0; count < k; count++) {
            j++;
            increment();
        }
        k += 2;
    }

    return ans;
};
