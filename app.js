const arr = [1, 4, 4, 10];

const avg = arr.reduce((acc, value) => {
  let i = arr.length;
  acc += value;
  return acc / i;
});

console.log(avg);
