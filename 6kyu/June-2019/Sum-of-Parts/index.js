function partsSums(ls) {
  let wholeLength = ls.length;
  let sumArray = [];
  while(wholeLength >= 0)
  {
    let sum = 0;
    for(let i = 0; i < ls.length; i++)
    {
      sum += ls[i];
      console.log(sum);
    }
    sumArray.push(sum);
    wholeLength--;
    ls.shift();
  }
  return sumArray;
}
partsSums([1,3,5,6,2])

// Attempting new approach:
function partsSums(ls)
{
  let sumArray = [];
  for(let i = 0; i < ls.length; i++)
  {
    let sum = ls[i];
    for(let j = i + 1; j < ls.length; j++)
    {
      sum += ls[j];
    }
    sumArray.push(sum);
  }
  sumArray.push(0);
  return sumArray;
}
partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358])

// Other Methods:
  // ls.shift();

  // while(ls.length > 0)
  // {
  //   console.log(ls);
  //   sumArray.push(ls);
  //   ls.shift();
  // }