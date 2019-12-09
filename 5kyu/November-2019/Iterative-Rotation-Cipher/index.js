const IterativeRotationCipher = {};
let quote = `If you wish to make an apple pie from scratch, you must first invent the universe.`;
let solution = `10 hu fmo a,ys vi utie mr snehn rni tvte .ysushou teI fwea pmapi apfrok rei tnocsclet`;
// IterativeRotationCipher.encode(10,quote) === solution; //true

/*--------------------------------------------------------------------------------------*/
/*----------------------------------------ENCODE----------------------------------------*/
/*--------------------------------------------------------------------------------------*/

IterativeRotationCipher.encode = function(n,str){
  // Must repeat cycle of steps the same number of times as n
  for(let i = 0; i < n; i++)
  {
    // (1.) Remove spaces in string (Note positions of spaces)
    let spaceArray = [];
    for(let i = 0; i < str.length; i++)
    {
      if(str.charAt(i) == " ")
      {
        console.log(i);
        spaceArray.push(i);
      }
    }
    for(let i = 0; i < str.length; i++)
    {
      if(str.charAt(i) == " ")
      {
        str = str.replace(" ", "");
      }
    }
    console.log(str);
    console.log("Spaces Positions: " + spaceArray);

    // (2.) Shift order of characters of new string to the right by "n" characters
    let shiftString = "";
    for(let i = str.length - n; i < str.length; i++)
    {
      shiftString = shiftString.concat(str.charAt(i));
    }
    str = str.replace(shiftString, "");
    let newShiftString = shiftString.concat(str);
    console.log(newShiftString);
    
    // (3.) Put spaces back in original positions
    let charArray = [];
    for(let i = 0; i < newShiftString.length; i++)
    {
      charArray.push(newShiftString.charAt(i));
    }
    for(let i = 0; i < spaceArray.length; i++)
    {
      charArray.splice(spaceArray[i], 0, " ");
    }
    console.log(charArray);

    // (4.) Shift characters of each substring (separated by 1 or more consecutive spaces) to the right
    for(let i = 0; i < charArray.length; i++)
    {
      
    }
  }
};

/*--------------------------------------------------------------------------------------*/
/*----------------------------------------DECODE----------------------------------------*/
/*--------------------------------------------------------------------------------------*/

IterativeRotationCipher.decode = function(str){
	
};

IterativeRotationCipher.encode();
IterativeRotationCipher.decode();