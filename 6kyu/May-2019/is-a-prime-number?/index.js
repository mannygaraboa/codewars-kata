function isPrime(num) {
  let bool = true;
  if(num <= 1)
  {
    bool = false;
    return bool;
  }
  let i = 2;
  while(i < num)
  {
    if(num % i == 0)
    {
      bool = false;
      break;
    }
    i++
  }
  return bool;

  // New Method Attempt:
  function isPrime(num) {
    let bool = true;
    if(num <= 1 || num == 4)
    {
      bool = false;
      return bool;
    }
    
    if(num == 2 || num == 3 || num == 5)
    {
      bool = true;
    }
    
    if(num >= 6)
    {
      if(num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 11 == 0 || num % 13 == 0 || num % 17 == 0 || num % 19 == 0)
      {
        bool = false;
      }
    }
    
    return bool;
  }
  isPrime(7);
}
isPrime(25)