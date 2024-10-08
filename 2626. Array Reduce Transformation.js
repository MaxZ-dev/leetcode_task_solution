let reduce = function (nums, fn, init) {
    let result = init
    if (nums.length === 0) {
        return init
    }
    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i])
    }
    return result
};
