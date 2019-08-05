function score( dice ) {
  let score = 0;
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let arr4 = [];
  let arr5 = [];
  let arr6 = [];

  for(let i = 0; i < dice.length; i++)
  {
    if(dice[i] == 1)
    {
      arr1.push(dice[i]);
    }
    else if(dice[i] == 2)
    {
      arr2.push(dice[i]);
    }
    else if(dice[i] == 3)
    {
      arr3.push(dice[i]);
    }
    else if(dice[i] == 4)
    {
      arr4.push(dice[i]);
    }
    else if(dice[i] == 5)
    {
      arr5.push(dice[i]);
    }
    else if(dice[i] == 6)
    {
      arr6.push(dice[i]);
    }
  }

  console.log(arr1);
  console.log(arr2);
  console.log(arr3);
  console.log(arr4);
  console.log(arr5);
  console.log(arr6);

  while(arr1.length > 0)
  {
    if(arr1.length >= 3)
    {
      score += 1000;
      arr1.splice(0, 3);
    }
    else
    {
      score += 100;
      arr1.splice(0, 1);
    }
  }

  while(arr2.length >= 3)
  {
    score += 200;
    arr2.splice(0, 3);
  }

  while(arr3.length >= 3)
  {
    score += 300;
    arr3.splice(0, 3);
  }

  while(arr4.length >= 3)
  {
    score += 400;
    arr4.splice(0, 3);
  }

  while(arr5.length > 0)
  {
    if(arr5.length >= 3)
    {
      score += 500;
      arr2.splice(0, 3);
    }
    else
    {
      score += 50;
      arr5.splice(0, 1);
    }
  }

  while(arr6.length >= 3)
  {
    score += 600;
    arr4.splice(0, 3);
  }

  return score;
}
score( [1, 1, 1, 3, 1] );

// Point Values:
  // Three 1's => 1000 points
  // Three 6's =>  600 points
  // Three 5's =>  500 points
  // Three 4's =>  400 points
  // Three 3's =>  300 points
  // Three 2's =>  200 points
  // One   1   =>  100 points
  // One   5   =>   50 point