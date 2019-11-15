function nextBigger(n){
  let nArray = [];
  let nString = n.toString();
  for(let i = 0; i < nString.length; i++)
  {
    let nInt = parseInt(nString.charAt(i));
    nArray.push(nInt);
  }

  let nArrayCopy = nArray.slice();
  nArrayCopy.sort(function(a, b){return b - a});
  let copyJoined = parseInt(nArrayCopy.join(""));
  
  console.log(nArray);
  console.log("Sorted Array: " + nArrayCopy);

  if(nArray.length == 1 || n === copyJoined)
  {
    return -1;
  }
  else
  {
    for(let i = nArray.length - 2; i >= 0; i--)
    {
      if(nArray[i] < nArray[i+1])
      {
        if(i === 0)
        {
          let firstNum = parseInt(nArray.splice(i, 1));
          nArray.sort();
          nArray.splice(1, 0, firstNum);
          let newNum = parseInt(nArray.join(""));
          return newNum;
        }
        else
        {
          let spliced = nArray.splice(i);
          let removedNum = parseInt(spliced.splice(1, 1));
          spliced.sort();
          spliced.unshift(removedNum);
          let finalArray = nArray.concat(spliced);
          let finalNum = parseInt(finalArray.join(""));
          return finalNum;
        }
      }
    }
  }
}
nextBigger(1542);

// 2710 ==> 7012
// 153 ==> 315
// 1542 ==> 2145
// 153931 ==> 159133
// 198761 ==> 611789
// 298761 ==> 612789
// 191111 ==> 911111
// 59876 ==> 65789
// 59786 ==> 59867