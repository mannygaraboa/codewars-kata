const InterlacedSpiralCipher = {};
let phrase1 = `Romani ite domum`;
let phrase2 = `Stsgiriuar i ninmd l otac`;

InterlacedSpiralCipher.encode = function(str){
  // Find out number of rows and columns to make a perfect square
	console.log("String length = " + str.length);
  let sqrt = Math.sqrt(str.length);
  let floor = Math.floor(sqrt);
  
  for(let i = 0; i < str.length; i++)
  {
    
  }
};

InterlacedSpiralCipher.decode = function(str){
	
};

InterlacedSpiralCipher.encode(phrase2); // `Rntodomiimuea  m`
InterlacedSpiralCipher.decode(phrase2); // `Sic transit gloria mundi` 

/* Encoding sequence for a 4 x 4 square:
[ 1  5  9  2]
[12 13 14  6]
[ 8 16 15 10]
[ 4 11  7  3]
*/

/* Encoding sequence for a 5 x 5 square:
[ 1  5  9 13  2]
[16 17 21 18  6]
[12 24 25 22 10]
[ 8 20 23 19 14]
[ 4 15 11  7  3]
*/