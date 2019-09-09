function solution(numbers) {
  const allEqual = arr => arr.every(v => v === arr[0]);
  while(allEqual(numbers) != true)
  {
    for(let i = numbers.length - 1; i > 0; i--)
    {
      for(let j = i - 1; j > 0; j--)
      {
        if(numbers[i] > numbers[j])
        {
          console.log(numbers);
          let newNum = numbers[i] - numbers[j];
          numbers.splice(i, 1, newNum);
          console.log("New Set: "+ numbers);
        }
      }
    }
  }

  function getSum(total, num){
    return total + num;
  }

  return numbers.reduce(getSum);
}
solution([6, 9, 21]) // => returns sum: 9
/*
  X_1 = [6, 9, 12] # -> X_1[2] = X[2] - X[1] = 21 - 9
  X_2 = [6, 9, 6]  # -> X_2[2] = X_1[2] - X_1[0] = 12 - 6
  X_3 = [6, 3, 6]  # -> X_3[1] = X_2[1] - X_2[0] = 9 - 6
  X_4 = [6, 3, 3]  # -> X_4[2] = X_3[2] - X_3[1] = 6 - 3
  X_5 = [3, 3, 3]  # -> X_5[1] = X_4[0] - X_4[1] = 6 - 3
*/