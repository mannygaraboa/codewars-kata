function deleteDigit(n) {
  // Split all digits in n into an Array
  let arr = [];
  let numbersArr = [];
  let nString = n.toString();
  for(let i = 0; i < nString.length; i++)
  {
    let currentString = nString[i];
    let currentNum = parseInt(currentString, 10);
    arr.push(currentNum)
  }
  console.log(arr)
  
  // Makes array of all posibilites after removing one number at a time
  for(let i = 0; i < arr.length; i++)
  {
    let arrCopy = arr.slice(0);
    let removed = arrCopy.splice(i,1);
    let newNumString = arrCopy.join("");
    let newNum = parseInt(newNumString, 10);
    numbersArr.push(newNum);
  }
  console.log(numbersArr);

  // Sort in Descending Order:
  numbersArr.sort(function(a,b) {return b-a});
  console.log("Sorted: " + numbersArr);
  return numbersArr[0];
}
deleteDigit(447258)

// Other Solution:
  // function deleteDigit(n) {
  //   const s = String(n)
  //   return Math.max(...Array.from(s, (_, i) => s.slice(0, i) + s.slice(i + 1)))
  // }