function validate(n){
  // Split the string into an array
  let string = n.toString();
  let arr = [];
  for(let i = 0; i < string.length; i++)
  {
    let currentChar = string[i];
    let currentNum = parseInt(currentChar, 10);
    arr.push(currentNum);
  }
  console.log(arr)
  // Checking n's length if it's even or odd
  if(arr.length % 2 == 0)
  {
    for(let i = arr.length - 1; i >= 0; i--)
    {
      i--;
      arr[i] *= 2;
    }
  }
  else
  {
    for(let i = arr.length - 2; i >= 0; i--)
    {
      arr[i] *= 2;
      i--;
    }
  }
  console.log(arr);

  // If certain digits in array are greater than 9
  for(let i = 0; i < arr.length; i++)
  {
    if(arr[i] > 9)
    {
      arr[i] -= 9;
    }
  }
  console.log(arr);

  // Sum of all digits in array
  let sum = 0;
  for(let i = 0; i < arr.length; i++)
  {
    sum += arr[i];
  }
  console.log(sum);

  // Checking if it's a valid credit card number
  if(sum % 10 === 0 && arr.length <= 16)
  {
    return true;
  }
  else
  {
    return false;
  }
}
validate(2121)

// Other Solution:
  // function validate(n){
  //   var sum = 0;

  //   while (n > 0) {
  //     var a = n % 10;
  //     n = Math.floor(n / 10);
      
  //     var b = (n % 10) * 2;
  //     n = Math.floor(n / 10);
      
  //     if (b > 9) {
  //       b -= 9;
  //     }
      
  //     sum += a + b;
  //   }
    
  //   return sum % 10 == 0;
  // }