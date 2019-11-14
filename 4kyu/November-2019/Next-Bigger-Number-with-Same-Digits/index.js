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
          
        }
        [nArray[i], nArray[i+1]] = [nArray[i+1], nArray[i]];
        let newNum = parseInt(nArray.join(""));
        return newNum;
      }
    }
    console.log(nArray);
  }
}
nextBigger(1542);

// 2710 ==> 7012
//  153 ==>  315