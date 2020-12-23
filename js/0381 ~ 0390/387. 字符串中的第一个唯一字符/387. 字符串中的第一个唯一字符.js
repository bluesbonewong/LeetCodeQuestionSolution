let firstUniqChar = function (s) {
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === undefined)
            map.set(s[i], 1);
        else {
            let val = map.get(s[i])
            map.set(s[i], ++val);
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) return i;
    }

    return -1;
};
