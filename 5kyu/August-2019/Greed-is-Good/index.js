function score( dice ) {
  let score = 0;
  let pairs = [];

  for(let i = 0; i < dice.length; i++)
  {
    let num = dice[i];
    let numCount = 1;
    for(let j = i+1; j < dice.length; j++)
    {
      if(num == dice[j])
      {
        numCount++;
        dice.splice(j, 1);
        j--;
      }
    }
    pairs.push([num, numCount])
  }
  console.log(pairs);

  for(let i = 0; i < pairs.length; i++)
  {
    if(pairs[i][0] == 1)
    {
      if(pairs[i][1] >= 3)
      {
        score += 1000;
        score += ((pairs[i][1] - 3) * 100);
      }
      else
      {
        score += ((pairs[i][1]) * 100)
      }
    }
    else if(pairs[i][0] == 2 && pairs[i][1] >= 3)
    {
      score += 200;
    }
    else if(pairs[i][0] == 3 && pairs[i][1] >= 3)
    {
      score += 300;
    }
    else if(pairs[i][0] == 4 && pairs[i][1] >= 3)
    {
      score += 400;
    }
    else if(pairs[i][0] == 5)
    {
      if(pairs[i][1] >= 3)
      {
        score += 500;
        score += ((pairs[i][1] - 3) * 50);
      }
      else
      {
        score += ((pairs[i][1]) * 50)
      }
    }
    else if(pairs[i][0] == 6 && pairs[i][1] >= 3)
    {
      score += 600;
    }
  }

  return score;
}
score( [4, 1, 4, 4, 5] );

// Point Values:
  // Three 1's => 1000 points
  // Three 6's =>  600 points
  // Three 5's =>  500 points
  // Three 4's =>  400 points
  // Three 3's =>  300 points
  // Three 2's =>  200 points
  // One   1   =>  100 points
  // One   5   =>   50 point

// Other Solution:
  // function score( dice ) {
  //   var dc = [0,0,0,0,0,0];
  //   var tdr = [1000,200,300,400,500,600];
  //   var sdr = [100,0,0,0,50,0];
  //   dice.forEach(function(x){ dc[x-1]++; });
  //   return dc.reduce(function(s,x,i){ 
  //     return s + (x >= 3? tdr[i] : 0) + sdr[i]*(x % 3);
  //   },0);
  // }