const prices = [[100, 200], [120, 100], [200, 350]];

const pricesArr = prices.map(prod => { return prod[1] - prod[0] }
).filter(price => price > 0);

console.log(pricesArr);
