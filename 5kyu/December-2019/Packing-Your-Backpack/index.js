function packBagpack(scores, weights, capacity) {
  let weightArray = [];
  let scoreArray = [];

  // Individual item checking
  for(let i = 0; i < weights.length; i++)
  {
    if(weights[i] <= capacity)
    {
      weightArray.push(weights[i]);
      scoreArray.push(scores[i]);
    }
  }
  
  // Combo Creator
  function combos(numbers) {
    let result = [];
    let comboArray = [];
    let f = function(prefix, numbers) {
      if(prefix = '')
      {
        for(let i = 0; i < numbers.length; i++)
        {
          comboArray.push(prefix + numbers[i]);
          f(prefix + numbers[i], numbers.slice(i + 1));
        }
      }
      else if(prefix == 0)
      {
        for(let i = 0; i < numbers.length; i++)
        {
          result.push(prefix + numbers[i]);
          f(prefix + numbers[i], numbers.slice(i + 1));
        }
      }
    }
    f(0, numbers);
    f('', numbers);
    console.log(result);
    console.log(comboArray);
  }
  let combinations = combos(weights);
  console.log(combinations);

  console.log(weightArray);
  console.log(scoreArray.sort(function (a, b) {return b - a}));
  return "Highest BackPack: " + scoreArray[0];
}
packBagpack([15, 10, 9, 5], [1, 5, 3, 4], 3)


/*
Previous Methods:

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

        if(j = weights.length)
        {
          
        }
      }

    // Multiple combination cheecking
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
    
    console.log(weightArray);
    return scoreArray;
  }
*/

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