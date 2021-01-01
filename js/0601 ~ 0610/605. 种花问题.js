let canPlaceFlowers = function (flowerbed, n) {
    let i = 0, cnt = 0, len = flowerbed.length;
    while (i < len) {
        // 当前不可种
        if (flowerbed[i] === 1) {
            i += 2;
            continue;
        }

        // 当前可种
        if ((i - 1 < 0 || flowerbed[i - 1] === 0) && (i + 1 > len - 1 || flowerbed[i + 1] === 0)) {
            cnt++;
            flowerbed[i] = 1;
            i += 2;
        } else i++;
    }

    return cnt >= n;
};
