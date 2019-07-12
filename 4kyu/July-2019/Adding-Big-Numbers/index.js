function add(a, b) {
  let sum = 0;
  let numA = parseInt(a, 10);
  let numB = parseInt(b, 10);
  let arrNumA = [];
  let arrNumB = [];

  for(let i = 0; i < a.length; i++)
  {
    let currentChar = a.charAt(i);
    let currentNum = parseInt(currentChar, 10);
    arrNumA.push(currentNum);
  }
  for(let i = 0; i < b.length; i++)
  {
    let currentChar = b.charAt(i);
    let currentNum = parseInt(currentChar, 10);
    arrNumB.push(currentNum);
  }
  console.log(arrNumA);
  console.log(arrNumB);

  sum = numA + numB;
  let e = parseInt(sum.toString().split('+')[1]);
  return sum.toString();
}
add("11234567890123456012311234", "21234567890123456789014321")