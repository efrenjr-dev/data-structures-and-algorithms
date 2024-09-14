// go through pricessArray
// take current as Max (reset Min) or Min
// get difference of Max and Min as highest profit

const stockPrices = [7, 4, 2, 5, 7, 8, 7, 49, 4, 2, 5, 2, 1];

const maxProfit = (pricesArray) => {
    let expensivePrice = 0;
    let cheapPrice = stockPrices[0];
    let maxProfit = 0;
    pricesArray.forEach((price) => {
        cheapPrice = Math.min(cheapPrice, price);

        let potentialProfit = price - cheapPrice;

        maxProfit = Math.max(maxProfit, potentialProfit);
    });
    return maxProfit;
};

console.log("Maximum profit: ", maxProfit(stockPrices));
