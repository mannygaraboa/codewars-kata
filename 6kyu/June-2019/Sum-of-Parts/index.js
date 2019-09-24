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

// Other Methods:
  // ls.shift();

  // while(ls.length > 0)
  // {
  //   console.log(ls);
  //   sumArray.push(ls);
  //   ls.shift();
  // }