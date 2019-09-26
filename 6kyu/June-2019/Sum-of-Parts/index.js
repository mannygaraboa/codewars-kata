function partsSums(ls) {
  let sumArr = [];
  let wholeLength = ls.length + 1;
  for(let i = 0; i < wholeLength; i++)
  {
    let sum = ls.reduce(function(a,b){
      return a + b;
    }, 0);
    sumArr.push(sum);
    ls.shift();
  }
  return sumArr;
}
partsSums([0, 1, 3, 6, 10])

// New Method Attempt:
function partsSums(ls) {
  if(ls.length == 0)
  {
    return [0];
  }
  else
  {
    for(let i = 0; i < ls.length; i++)
    {
      let sum = 0;
      for(let j = i; j < ls.length; j++)
      {
        sum += ls[j];
      }
      ls[i] = sum;
    }
    ls.push(0);
    return ls;
  }
}

// Other Methods:
  // ls.shift();

  // while(ls.length > 0)
  // {
  //   console.log(ls);
  //   sumArray.push(ls);
  //   ls.shift();
  // }