let lengthOfLongestSubstring = function (s) {
    let n = s.length, ans = 0;
    let set = new Set();
    let i = 0;
    let j = 0
    while (i < n && j < n) {
        if (!set.has(s[j])) {
            set.add(s[j++]);
            ans = Math.max(ans, j - i);
        } else {
            set.delete(s[i++]);
        }
    }
    return ans;
};
