function isBalanced(s, caps) {
  let capsArray = [];
  let letterNumber = /^[0-9a-zA-Z !?]+$/;
  for(let i = 0; i < s.length; i++)
  {
    let char = s.charAt(i);
    if(!char.match(letterNumber))
    {
      console.log(char)
      capsArray.push(char)
    }
  }
  console.log(capsArray);

  let string = capsArray.join("");
  console.log(string);
  if(string == caps)
  {
    return true;
  }
  else
  {
    return false;
  }
}
isBalanced("(Sens{ei says yes!)}", "(){}")