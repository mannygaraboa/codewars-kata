function persistence(num) {
  let numString = num.toString();
  let splitString = numString.split("");
  let sum = 1;
  let grandTotal = 0;

  if(splitString.length == 1)
  {
    console.log(splitString);
    console.log(sum);
    return grandTotal;
  }
  
  while(splitString.length > 1)
  {
    sum = 1;
    for(let i = 0; i < splitString.length; i++)
    {
      sum = sum * splitString[i];
    }
    numString = sum.toString();
    splitString = numString.split("");
    console.log(splitString);
    grandTotal++;
  }
  return grandTotal;
}
persistence(999)

// Other Solution:
// function persistence(num) {
//    var times = 0;
   
//    num = num.toString();
   
//    while (num.length > 1) {
//      times++;
//      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//    }
   
//    return times;
// }
