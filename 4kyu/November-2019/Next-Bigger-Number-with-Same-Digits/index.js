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
                nArray.sort();
                let finalArray = spliced.concat(nArray);
                let finalNum = parseInt(finalArray.join(""));
                return finalNum;
              }
            }
          }
          else if(nArray[0] > nArray[nArray.length - 1])
          {
            for(let i = 0; i < nArray.length; i++)
            {
              if(nArray[0] < nArray[(nArray.length - 1) - i])
              {
                let spliced = nArray.splice(((nArray.length - 1) - i), 1);
                nArray.sort();
                let finalArray = spliced.concat(nArray);
                let finalNum = parseInt(finalArray.join(""));
                return finalNum;
              }
            }
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
          for(let i = 0; i < spliced.length; i++)
          {
            if(spliced[0] < spliced[(spliced.length - 1) - i])
            {
              let splicedNum = spliced.splice(((spliced.length - 1) - i), 1);
              spliced.sort();
              spliced.unshift(splicedNum);
              let finalArray = nArray.concat(spliced);
              let finalNum = parseInt(finalArray.join(""));
              return finalNum;
            }
          }
        }
      }
    }
  }
}
nextBigger(59884848459853);

// 2710 ==> 7012
// 153 ==> 315
// 1541 ==> 4115
// 1542 ==> 2145
// 153931 ==> 159133
// 192111 ==> 211119
// 198761 ==> 611789
// 298761 ==> 612789
// 298763 ==> 326789
// 78321 ==> 81237
// 191111 ==> 911111
// 191112 ==> 191121
// 59876 ==> 65789
// 59786 ==> 59867
// 59884848459853 ==> 59884848483559

// Other Solution:
/*
  function nextBigger(n){
    console.log(n);
    var chars = n.toString().split('');
    var i = chars.length-1;
    while(i > 0) {
      if (chars[i]>chars[i-1]) break;
      i--;
    }
    if (i == 0) return -1;
    var suf = chars.splice(i).sort();
    var t = chars[chars.length-1];
    for (i = 0; i < suf.length; ++i) {
      if (suf[i] > t) break;
    }
    chars[chars.length-1] = suf[i]
    suf[i] = t;
    var res = chars.concat(suf);
    var num = parseInt(res.join(''));
    console.log("->" +num);
    return num;
  }
*/