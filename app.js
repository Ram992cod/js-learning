const score = [5, 10, 0, 15];

//for (const [index, element] of score.entries()) {
//  console.log(`Раунд:${index + 1} ${element} очков`);
//}

score.forEach((scoreEl, i) => {
    console.log(`Раунд ${i + 1}: ${scoreEl}`)
});