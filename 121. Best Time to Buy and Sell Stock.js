// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.


// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {

    let max = 0;
    let minPrice = 100000;

    let i;
    let currentValue;

    for (i = 0; i < prices.length; i++) {

        currentValue = prices[i];

        if (currentValue < minPrice) {

            minPrice = currentValue;
        } else if (currentValue - minPrice > max) {

            max = currentValue - minPrice;
        }
    }
    return max;
};

var maxProfit2 = function (prices) {

    let max = 0;
    let minPrice = 100000;

    let i, currentValue;
    const length = prices.length;

    for (i = 0; i < length; i++) {

        currentValue = prices[i];

        if (currentValue < minPrice) {

            minPrice = currentValue;
        } else if (currentValue - minPrice > max) {

            max = currentValue - minPrice;
        }
    }
    return max;
};

////teting

const prices = [2, 4, 1, 7, 1, 5, 3, 6, 4, 56, 3, 5, 9, 123, 456, 3, 8, 7, 6, 5, 4, 1, 1, 9, 8, 4, 5, 6, 7, 8, 9, 1, 5, , 67, 45, 1, 2, 12, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 45, 67, 8, 3, 6, 5, 4, 3, 9, 8, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 123, 123, 345, 34];//[7,1,5,3,6,4];

// console.time("modified");
// maxProfit2(prices);
// console.timeEnd("modified");

console.time("normal");
maxProfit(prices);
console.timeEnd("normal");

