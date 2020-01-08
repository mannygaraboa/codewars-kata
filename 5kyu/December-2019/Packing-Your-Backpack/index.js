function packBagpack(scores, weights, capacity) {
  let largestSum = 0;
  let scoreArray = [];
  // Individual item checking
  for(let i = 0; i < weights.length; i++)
  {
    if(weights[i] <= capacity && scores[i] > largestSum)
    {
      largestSum = scores[i];
      scoreArray.push(scores[i]);
    }
  }

  for(let i = 0; i < weights.length; i++)
  {
    for(let j = weights.length - 1; j > 0; j--)
    {
      const arrSum = arr => arr.reduce((a,b) => a + b, 0);
    }
  }

  console.log(largestSum);
  return scoreArray;
}
packBagpack([15, 10, 9, 5], [1, 5, 3, 4], 3)

// scores = [15, 10, 9, 5]
// weights = [1, 5, 3, 4]
// capacity = 8

// Solution is 29 (items 1, 3 & 4)

// scores = [4, 12, 27, 31, 5]
// weights = [1, 5, 3, 4, 6]
// capacity = 15

// Solution is 