function shortestStepsToNum(num) {
  console.log("Starting Num: " + num);
  let downCount = 0;
  while(num > 1)
  {
    if(num % 2 !== 0)
    {
      num -= 1;
      downCount++;
      console.log("Subtracted 1, Num = " + num + " /  Count: " + downCount);
    }
    else
    {
      num /= 2;
      downCount++;
      console.log("Halved, Num = " + num + " /  Count: " + downCount);
    }
  }
  return downCount;
}
shortestStepsToNum(164)

// Other Solution:
  // function shortestStepsToNum(num) {
  //   if (num < 3)
  //     return num - 1;
  //   let next = num % 2 ? num - 1 : num / 2;
  //   return 1 + shortestStepsToNum(next);
  // }

// Previous Method:
  // while(sum < num)
  // {
  //   if(sum % 2 !== 0)
  //   {
  //     sum += 1;
  //     console.log("Added 1, Sum = " + sum);
  //     count++;
  //   }
  //   else
  //   {
  //     sum *= 2
  //     console.log("Doubled, Sum = " + sum);
  //     count++;
  //   }
  // }