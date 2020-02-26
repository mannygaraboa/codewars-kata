function packBagpack(scores, weights, capacity) {
  let largestSum = 0;
  let weightArray = [];
  let scoreArray = [];

  // Individual item checking
  for(let i = 0; i < weights.length; i++)
  {
    if(weights[i] <= capacity)
    {
      largestSum = scores[i];
      weightArray.push(weights[i]);
      scoreArray.push(scores[i]);
    }
  }
  
  // 2 numbers combined weights checking
  for(let i = 0; i < weights.length; i++)
  {
    for(let j = i+1; j < weights.length; j++)
    {
      let combo = weights[i] + weights[j];
      if(combo <= capacity)
      {
        weightArray.push(combo);
      }
      console.log("Combo: " + combo);
    }
  }
  
  console.log(weightArray);
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

/*
  Other Methods:

  for(let i = 0; i < weights.length; i++)
  {
    let weightSum = weights[i];
    for(let j = i+1; j < weights.length; j++)
    {
      weightSum += weights[j];
      console.log(weightSum);
      weightArray.push(weightSum);
    }
  }
*/