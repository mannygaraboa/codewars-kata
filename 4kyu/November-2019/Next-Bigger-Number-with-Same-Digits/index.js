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
  let copyJoined = nArrayCopy.join("");
  
  if(nArray.length == 1 || n == copyJoined)
  {
    return -1;
  }
  else
  {
    return 0;
  }
}
nextBigger(123);

// 2710 ==> 7012
//  153 ==>  315