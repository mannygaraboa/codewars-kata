function numberOfPairs(gloves)
{
  let pairs = 0;
  for(let i = 0; i < gloves.length; i++)
  {
    for(let j = i+1; j < gloves.length; j++)
    {
      if(gloves[i] == gloves[j])
      {
        pairs++;
        gloves.splice(j,1);
        gloves.splice(i,1);
        i--;
      }
    }
  }
  return pairs;
}
numberOfPairs(['red','green','red','blue','blue']);