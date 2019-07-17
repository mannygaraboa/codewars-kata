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
    let newNumChar = firstArr[i+1];
    let newNum = parseInt(newNumChar, 10);
    if(firstArr[i] == "\\" && newNum >= 0)
    {
      secondArr.push(firstArr[i])
      while(firstArr[i+2] >= 0)
      {
        newNumChar = newNumChar.concat(firstArr[i+2]);
        i++;
      }
      secondArr.push(newNumChar);
      let count = 0;
      while(count < newNum)
      {
        i++;
        secondArr.push(firstArr[i+1])
        count++;
      }
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
    if(secondArr[i] == "\\" && secondArr[i+1] > 0)
    {
      let num = parseInt(secondArr[i+1], 10)
      let count = 0;
      let newChar = "";
      while(count < num)
      {
        let currentChar = secondArr[i+2]
        if(currentChar == undefined)
        {
          break;
        }
        if(currentChar != undefined)
        {
          newChar = newChar.concat(currentChar);
        }
        if(currentChar.length > 1)
        {
          // console.log(currentChar);
          num = num - (currentChar.length - 1);
        }
        i++;
        count++;
      }
      result.push(newChar);
      i++;
    }
    else
    {
      result.push(secondArr[i])
    }
  }
  return result;
}
decode("\\12cvalQDjZZGynP\\66X8T\\3nXDLujYgxlWopLSQgckQuohQASBnJLsb\\9QUxBPHSRe\\37as0ug4QjoN2ma3IcLTpNmLwrxFB\\65zzW5hPWqV")

// Other Solution:
  // function decode(str) {
  //     for (var i = 0, res = []; i < str.length; i++)
  //         if (str[i] === '\\') {
  //             var start = ++i;
  //             while (!isNaN(str[i])) i++;
  //             var num = +str.slice(start, i);
  //             res.push(str.slice(i, i + num));
  //             i += --num;
  //             continue;
  //         }
  //         else res.push(str[i]);
  //     return res;
  // }

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