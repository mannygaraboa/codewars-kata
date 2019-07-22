var sum_pairs=function(ints, s){
  console.log("All integers: " + ints);
  console.log("Sum: " + s);
  let count = 1;
  for(let i = 0; i < ints.length; i++)
  {
    if((i + count) == (ints.length))
    {
      i = 0;
      count++;
      console.log("count is now: " + count);
    }
    let firstNum = ints[i];
    let secondNum = ints[i+count];
    console.log(firstNum + " + " + secondNum);
    if(firstNum + secondNum == s)
    {
      return [firstNum, secondNum];
    }
    
    if(count == ints.length)
    {
      console.log("No pair of numbers can be added to sum " + s);
      return undefined
    }
  }
}
sum_pairs([1, 4, 8, 8, 3, 15], 19)

// for(let j = i+1; j < ints.length; j++)
// {
//   let currentNum2 = ints[j];
//   if(currentNum + currentNum2 == s)
//   {
//     pair.push(currentNum);
//     pair.push(currentNum2);
//     // console.log(pair);
//     return pair;
//   }
// }