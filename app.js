const transactionUSD = [10, -6, 50, 100];

const transactionRUB = transactionUSD.map((transaction, el) => {
    return transaction * 60;
})

console.log(transactionRUB);