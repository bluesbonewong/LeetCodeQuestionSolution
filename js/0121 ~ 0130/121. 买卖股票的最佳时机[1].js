let maxProfit = function (prices) {
    let min = 0x3f3f3f3f, amount = 0;

    for (let i = 0; i < prices.length; i++) {
        // 假设在第i天卖掉，看看挣多少，亏钱肯定不卖，不亏钱才卖
        if (prices[i] - min >= 0) amount = Math.max(amount, prices[i] - min);

        min = Math.min(min, prices[i]);
    }

    return amount;
};
