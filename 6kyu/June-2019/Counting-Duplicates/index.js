function duplicateCount(text){
  let count = 0;
  let firstArr = [];
  let finalArr = [];
  for(let i = 0; i < text.length; i++)
  {
    let currentChar = text.charAt(i);
    let upperChar = currentChar.toUpperCase();
    let re = new RegExp(upperChar, 'gi');
    let match = text.match(re).length;
    let arr = [upperChar, match];
    firstArr.push(arr);
    if(i == 0 && ((firstArr[i])[1]) > 1)
    {
      count++;
    }
  }
  finalArr.push(firstArr[0]);
  
  for(let i = 0; i < firstArr.length; i++)
  {
    let bool = true;
    for(let j = 0; j < finalArr.length; j++)
    {
      if(((firstArr[i])[0]) == ((finalArr[j])[0]))
      {
        bool = false;
      }
    }

    if(bool == true && ((firstArr[i])[1]) > 1)
    {
      finalArr.push(firstArr[i])
      count++;
    }
  }
  console.log(finalArr);
  return count;
}
duplicateCount("eEhHeElL123321o");

// Syntax for match(): string.match(RegExp) 
// 'gi' = case sensitive

// Other Solution:
  // function duplicateCount(text){
  //   return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  // }