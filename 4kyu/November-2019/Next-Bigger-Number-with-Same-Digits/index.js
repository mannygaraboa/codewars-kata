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
          if(nArray[0] === nArray[nArray.length - 1])
          {
            for(let i = nArray.length - 1; i >= 0; i--)
            {
              if(nArray[i] < nArray[i - 1])
              {
                let spliced = nArray.splice(i - 1);
                let finalArray = spliced.concat(nArray);
                let finalNum = parseInt(finalArray.join(""));
                return finalNum;
              }
            }
          }
          else if(nArray[0] > nArray[nArray.length - 1])
          {
            let spliced = nArray.splice(nArray.length - 2);
            nArray.sort();
            let finalArray = spliced.concat(nArray);
            let finalNum = parseInt(finalArray.join(""));
            return finalNum;
          }
          else if(nArray[0] < nArray[nArray.length - 1])
          {
            let splicedNum = parseInt(nArray.splice(nArray.length - 1));
            nArray.sort();
            nArray.unshift(splicedNum);
            let finalNum = parseInt(nArray.join(""));
            return finalNum;
          }
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
nextBigger(153931);

// 2710 ==> 7012
// 153 ==> 315
// 1541 ==> 4115
// 1542 ==> 2145
// 153931 ==> 159133
// 198761 ==> 611789
// 298761 ==> 612789
// 298763 ==> 326789
// 78321 ==> 81237
// 191111 ==> 911111
// 191112 ==> 191121
// 59876 ==> 65789
// 59786 ==> 59867