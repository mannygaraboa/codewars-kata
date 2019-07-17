function decode(str) {
  var result = [];
  let firstArr = [];
  let secondArr = [];

  // Separating characters from string into own elements of first array
  for(let i = 0; i < str.length; i++)
  {
    firstArr.push(str.charAt(i));
  }

  // For numbers higher than double digits, pushed into second array
  for(let i = 0; i < firstArr.length; i++)
  {
    if(firstArr[i] == "\\")
    {
      let newNum = firstArr[i+1];
      while(firstArr[i+2] >= 0)
      {
        newNum = newNum.concat(firstArr[i+2]);
        i++;
      }
      secondArr.push(newNum);
      i++;
    }
    else
    {
      secondArr.push(firstArr[i])
    }
  }
  // console.log(secondArr);

  // Grouping together elements to form new characters based off numbers within array
  for(let i = 0; i < secondArr.length; i++)
  {
    if(secondArr[i] > 0)
    {
      let num = parseInt(secondArr[i], 10)
      let count = 0;
      let newChar = "";
      while(count < num)
      {
        newChar = newChar.concat(secondArr[i+1]);
        i++;
        count++;
      }
      //console.log(newChar);
      result.push(newChar);
    }
    else
    {
      result.push(secondArr[i])
    }
  }

  return result;
}
decode("abc\\10defghi\\2jklkdow\\4lerpfigf")

// Past Methods: 
  // if(currentChar.match(/[a-z]/i))
  // {
  //   result.push(currentChar);
  // }

  // if (isNaN(parseInt(currentChar, 10))) 
  // {
  //   console.log(currentChar);
  //   result.push(currentChar);
  // }

  // let str2 = str.replace(/\\/g,"/");
  // let re2 = new RegExp("\\\\","g"); 
  // let str2 = str.replace(re2,"/");
  // console.log(str2);