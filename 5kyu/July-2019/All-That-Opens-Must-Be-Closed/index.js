function isBalanced(s, caps) {
  // Splitting caps into array for checking
  let capsArray = []
  for(let i = 0; i < caps.length; i++)
  {
    let char = caps.charAt(i);
    capsArray.push(char);
  }
  console.log(capsArray);

  // Pushing cap characters from string into sArray
  let sArray = [];
  let letterNumber = /^[0-9a-zA-Z !?]+$/;
  for(let i = 0; i < s.length; i++)
  {
    let char = s.charAt(i);
    if(!char.match(letterNumber))
    {
      sArray.push(char)
    }
  }
  console.log(sArray);

  // Comparing array elements
  let bool = true;
  for(let i = 0; i < capsArray.length; i++)
  {
    for(let j = 0; j < sArray.length; j++)
    {
      if(sArray[i] == capsArray[j])
      {
        // console.log(sArray[i] + " + " + capsArray[j])
        break;
      }
      else if(j == sArray.length)
      {
        bool = false;
      } 
    }
  }

  if(bool == true && sArray.length == capsArray.length)
  {
    return true;
  }
  else
  {
    return false;
  }
}
isBalanced("(Sens{ei says yes!)}", "(){}")

// Previous Methods:
  // for(let i = 0; i < caps.length; i++)
  // {
  //   let firstHalf = caps.charAt(i);
  //   let secondHalf = caps.charAt(i + 1);
  //   let capPair = firstHalf.concat(secondHalf);
  //   capsArray.push(capPair);
  //   i++;
  // }

  // let string = sArray.join("");
  // console.log(string);
  // if(string == caps)
  // {
  //   return true;
  // }
  // else
  // {
  //   return false;
  // }