const IterativeRotationCipher = {};

/*--------------------------------------------------------------------------------------*/
/*----------------------------------------ENCODE----------------------------------------*/
/*--------------------------------------------------------------------------------------*/

IterativeRotationCipher.encode = function(n,str){
	// (1.) Remove spaces in string (Note positions of spaces)
  let spaceArray = [];
  for(let i = 0; i < str.length; i++)
  {
    if(str.charAt(i) == " ")
    {
      spaceArray.push(i);
      str = str.replace(" ", "");
    }
  }

  // (2.) Shift order of characters of new string to the right by "n" characters


  // (3.) Put spaces back in original positions


  // (4.) Shift characters of each substring (separated by 1 or more consecutive spaces) to the right


};

/*--------------------------------------------------------------------------------------*/
/*----------------------------------------DECODE----------------------------------------*/
/*--------------------------------------------------------------------------------------*/

IterativeRotationCipher.decode = function(str){
	
};

IterativeRotationCipher.encode();
IterativeRotationCipher.decode();