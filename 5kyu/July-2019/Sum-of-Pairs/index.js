var sum_pairs=function(ints, s){
  console.log("All integers: " + ints);
  console.log("Sum: " + s);
  let pair = [];
  for(let i = 0; i < ints.length; i++)
  {
    let currentNum = ints[i];
    for(let j = i+1; j < ints.length; j++)
    {
      let currentNum2 = ints[j];
      if(currentNum + currentNum2 == s)
      {
        pair.push(currentNum);
        pair.push(currentNum2);
        // console.log(pair);
        return pair;
      }
    }
  }
  if(pair.length == 0)
  {
    console.log("No pair of numbers can be added to sum " + s);
    return undefined
  }
}
sum_pairs([10, 5, 2, 3, 7, 5], 10)