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
isPrime(25)