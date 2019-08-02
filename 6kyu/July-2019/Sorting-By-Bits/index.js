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
    
    // Pushing pair into bitArray
    let pair = [num, bitCount];
    bitArray.push(pair);
  }

  // Sorting bitArray by number of bitCount
  bitArray.sort( function(a, b)
  {
    if ( a[0] == b[0] ) return 0;
    return a[0] < b[0] ? -1 : 1;
  });
  // console.log(bitArray);
  bitArray.sort( function(a, b)
  {
    if ( a[0] < b[0] && a[1] == b[1] ) return -1;
    return a[1] < b[1] ? -1 : 1;
  });
  // console.log(bitArray);

  // Pushing first index of each array within bitArray into arrCopy
  let arrCopy = [];
  for(let i = 0; i < bitArray.length; i++)
  {
    arrCopy.push((bitArray[i])[0]);
  }
  // console.log(arrCopy);

  // Sort original arr into the same way as arrCopy
  arr.sort(function(a, b){  
    return arrCopy.indexOf(a) - arrCopy.indexOf(b);
  });
  return arr;
}
sortByBit([9,4,5,3,5,7,2,56,16,8,2,6,8,0])

// Bitwise Operator:
  // console.log(5 & 13 & 3); ==> returns 1

// Other Solution:
  // const sortByBit = arr => arr.sort((a, b) => a.toString(2).replace(/0/g, '') - b.toString(2).replace(/0/g, '') || a - b)