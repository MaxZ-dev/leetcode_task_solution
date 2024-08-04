let findMedianSortedArrays = function (nums1, nums2) {
    let listNum = nums1.concat(nums2).sort(function(a, b) {
        return a - b;
    });
    if (listNum.length % 2 === 1) {
        return listNum[Math.floor(listNum.length / 2)]
    } else {
        return (listNum[listNum.length / 2 - 1] + listNum[listNum.length / 2]) / 2
    }
}
