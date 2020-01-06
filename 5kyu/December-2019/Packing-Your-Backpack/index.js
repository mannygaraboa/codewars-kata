function packBagpack(scores, weights, capacity) {
  let scoreArray = [];
  for(let i = 0; i < weights.length; i++)
  {
    for(let j = 0; j < weights.length; j++)
    {
      if(weights[i] <= capacity)
      {
        scoreArray.push(scores[i]);
      }
    }
  }
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