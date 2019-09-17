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
}
  // New Method Attempt:
function isPrime(num) {
  let bool = true;
  if(num <= 1)
  {
    bool = false;
    return bool;
  }
  else if(num % 2 == 0 && num != 2)
  {
    bool = false;
    return bool;
  }
  else if(num % 2 != 0)
  {
    if(num % 3 == 0 && num != 3 || num % 5 == 0 && num != 5 || num % 7 == 0 && num != 7)
    {
      bool = false;
      return bool;
    }
    
    let sqrt = Math.sqrt(num);
    if(Number.isInteger(sqrt) == true)
    {
      bool = false;
      return bool;
    }
    else if(sqrt % 2 == 0)
    {
      bool = false;
      return bool;
    }
  }
  return bool;
}

isPrime(25)