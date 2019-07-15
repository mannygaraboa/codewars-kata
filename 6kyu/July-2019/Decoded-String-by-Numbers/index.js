function decode(str) {
  var result = [];

  for(let i = 0; i < str.length; i++)
  {
    result.push(str.charAt(i));
  }

  return result;
}
decode("abc\5defghi\2jkl")

// if(currentChar.match(/[a-z]/i))
// {
//   result.push(currentChar);
// }

// if (isNaN(parseInt(currentChar, 10))) 
// {
//   console.log(currentChar);
//   result.push(currentChar);
// }