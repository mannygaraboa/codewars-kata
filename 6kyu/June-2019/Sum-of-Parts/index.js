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

// ls.shift();

// while(ls.length > 0)
// {
//   console.log(ls);
//   sumArray.push(ls);
//   ls.shift();
// }