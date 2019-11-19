const divisibleByFive = /^0|(101(0)*)$/; // partial solution
function divisibleByFive(string)
{
  let int = parseInt(string, 2);
  console.log(int);
  if(int % 5 == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}
divisibleByFive('10000111')