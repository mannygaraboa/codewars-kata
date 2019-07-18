function digPow(n, p){
  let digits = ("" + n).split("");
  console.log(digits);

  // Create new array of numbers raised by the increasing power
  let powerArr = [];
  for(let i = 0; i < digits.length; i++)
  {
    let power = Math.pow(digits[i], p);
    powerArr.push(power);
    p++;
  }
  console.log(powerArr);

  // Add together all numbers in powerArr & divide by n to find k
  let sum = powerArr.reduce((a,b) => a + b, 0);
  let k = sum / n;
  console.log("k = " + k);
  if(k < 1 || k % 1 != 0)
  {
    return -1;
  }
  else
  {
    return k;
  }
}
digPow(923, 5);

// Other Solution:
  // function digPow(n, p) {
  //   var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
  //   return x % n ? -1 : x / n
  // }