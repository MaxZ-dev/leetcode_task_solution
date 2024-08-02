let firstNum = 0;
let secondNum = 0;
let addTwoNumbers = function (l1, l2) {
    let result = 0
        for (let i = l1.length - 1; i >= 0; i--) {
            firstNum = firstNum + l1[i] * 10 ** i
        }
        for (let i = l2.length - 1; i >= 0; i--) {
            secondNum = secondNum + l2[i] * 10 ** i
        }
        result = (firstNum + secondNum).toString().split("").reverse()
        for (let i = 0; i < result.length; i++) {
            result[i] = Number(result[i]);
        }
        console.log(result)
}
