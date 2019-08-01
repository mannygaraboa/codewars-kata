function sortByBit(arr) {
  let bitArray = [];
  for(let i = 0; i < arr.length; i++)
  {
    let num = arr[i];
    let bitCount = 0;
    let bitNum = (num >>> 0).toString(2); // ">>>" = bitwise operator to bit version of number
    console.log(num + " : " + bitNum);

    // Counting how many 1's are in each bitNum
    for(let j = 0; j < bitNum.length; j++)
    {
      let bitChar = bitNum.charAt(j);
      if(bitChar == 1)
      {
        bitCount++;
      }
    }
    
    let pair = [num, bitCount];
    bitArray.push(pair);
  }
  // Clear original arr
  arr.length = 0;

  // Sorting bitArray by number of bitCount
  bitArray.sort( function(a, b)
  {
    if ( a[0] == b[0] ) return 0;
    return a[0] < b[0] ? 1 : -1;
  });
  bitArray.sort( function(a, b)
  {
    if ( a[0] < b[0] && a[1] == b[1] ) return 0;
    return a[1] < b[1] ? -1 : 1;
  });
  // console.log(bitArray);

  // Pushing first index of each array within bitArray into the original arr
  for(let i = 0; i < bitArray.length; i++)
  {
    arr.push((bitArray[i])[0]);
  }
  return arr;
}
sortByBit([9,4,5,3,5,7,2,56,8,2,6,8,0])

// Bitwise Operator:
  // console.log(5 & 13 & 3); ==> returns 1