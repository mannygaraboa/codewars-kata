function iqTest(numbers){
  let arr = numbers.split(" ");
  let oddCount = 0;
  let evenCount = 0;
  for(let i = 0; i < arr.length; i++)
  {
    if(arr[i] % 2 == 0)
    {
      evenCount++;
    }
    else
    {
      oddCount++;
    }
  }
  if(evenCount > oddCount)
  {
    for(let i = 0; i < arr.length; i++)
    {
      if(arr[i] % 2 != 0)
      {
        return i + 1;
      }
    }
  }
  else if(evenCount < oddCount)
  {
    for(let i = 0; i < arr.length; i++)
    {
      if(arr[i] % 2 == 0)
      {
        return i + 1;
      }
    }
  }
}
iqTest("1 3 4 5")

// Other Solution:
  // function iqTest(numbers){
  //   numbers = numbers.split(" ").map(function(el){return parseInt(el)});
    
  //   var odd = numbers.filter(function(el){ return el % 2 === 1});
  //   var even = numbers.filter(function(el){ return el % 2 === 0});
    
  //   return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
  // }