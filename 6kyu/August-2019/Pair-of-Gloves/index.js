function numberOfPairs(gloves)
{
  console.log(gloves);
  let pairs = 0;
  let colorSort = [];
  for(let i = 0; i < gloves.length; i++)
  {
    let currentColor = gloves[i];
    let bool = true;
    for(let j = 0; j < colorSort.length; j++)
    {
      if(currentColor == colorSort[j][0])
      {
        bool = false;
      }
    }
    let colorCount = 1;
    for(let j = i+1; j < gloves.length; j++)
    {
      if(currentColor == gloves[j])
      {
        colorCount++;
      }
    }
    let pair = [currentColor, colorCount];
    if(bool == true)
    {
      colorSort.push(pair);
    }
  }

  console.log(colorSort);

  for(let i = 0; i < colorSort.length; i++)
  {
    let pairedGloves = colorSort[i][1] / 2;
    pairedGloves = Math.floor(pairedGloves);
    pairs += pairedGloves;
  }
  return pairs;
}
numberOfPairs(['red','green','red','blue','blue', 'red', 'red']);

/*
  Other Solution:

  function numberOfPairs(gloves)
  {
    gloves = gloves.sort();
    let count = 0;
    for (var i = 0; i < gloves.length; i++) {
      if (gloves[i] === gloves[i + 1]) {
        count++
        i++
      }
    }
    return count;
  }
*/