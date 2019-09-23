function isPrime(num) {
  let bool = true;
  let sqrt = Math.sqrt(num);

  if(num <= 1 || Number.isInteger(sqrt) == true)
  {
    bool = false;
    return bool;
  }

  let i = 2;
  while(i < sqrt)
  {
    if(num % i == 0)
    {
      bool = false;
      return bool;
    }
    i++;
  }
  
  return bool;
}
isPrime(49);

/* 
  Other Solution:
  function isPrime(num) {
    for (var i = 2; i < num; i++) if (num % i == 0) return false;
    return num >= 2; 
  }
*/