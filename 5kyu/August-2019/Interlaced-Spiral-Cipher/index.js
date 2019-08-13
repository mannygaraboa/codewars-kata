const InterlacedSpiralCipher = {};
let phrase1 = `Romani ite domum`;
let phrase2 = `Stsgiriuar i ninmd l otac`;

/*--------------------------------------------------------------------------------------*/
/*----------------------------------------ENCODE----------------------------------------*/
/*--------------------------------------------------------------------------------------*/

InterlacedSpiralCipher.encode = function(str){
  // Insert function to properly place characters
  Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
  };
  // Find out number of rows to make a perfect square
	console.log("String length = " + str.length);
  let square = [];
  let sqrt = Math.sqrt(str.length);
  let rows = Math.ceil(sqrt);
  
  for(let i = 0; i < rows; i++)
  {
    square.push([]);
  }
  console.log(square);
  
  // For a 4 x 4 square
  /* Encoding sequence for a 4 x 4 square:
  [ 1  5  9  2]
  [12 13 14  6]
  [ 8 16 15 10]
  [ 4 11  7  3]
  */
  if(rows <= 4)
  {
    for(let i = 0; i < 16; i++)
    {
      let currentChar = str.charAt(i);
      if(i == 0)
      {
        square[0].insert(0, currentChar);
      }
      else if(i == 1)
      {
        square[0].insert(3, currentChar);
      }
      else if(i == 2)
      {
        square[3].insert(i, currentChar);
      }
      else if(i == 3)
      {
        square[3].insert(0, currentChar);
      }
      else if(i == 4)
      {
        square[0].insert(1, currentChar);
      }
      else if(i == 5)
      {
        square[1].insert(3, currentChar);
      }
      else if(i == 6)
      {
        square[3].insert(1, currentChar);
      }
      else if(i == 7)
      {
        square[2].insert(0, currentChar);
      }
      else if(i == 8)
      {
        square[0].insert(2, currentChar);
      }
      else if(i == 9)
      {
        square[2].insert(1, currentChar);
      }
      else if(i == 10)
      {
        square[3].insert(1, currentChar);
      }
      else if(i == 11)
      {
        square[1].insert(0, currentChar);
      }
      else if(i == 12)
      {
        square[1].insert(1, currentChar);
      }
      else if(i == 13)
      {
        square[1].insert(2, currentChar);
      }
      else if(i == 14)
      {
        square[2].insert(1, currentChar);
      }
      else if(i == 15)
      {
        square[2].insert(1, currentChar);
      }
    }
    console.log(square);
    
    // Combine the row arrays & then concat them together
    let concat = [].concat.apply([], square);
    let string = concat.join("");
    console.log(string);
    return string;
  }

  // For a 5 x 5 square
  /* Encoding sequence for a 5 x 5 square:
  [ 1  5  9 13  2]
  [16 17 21 18  6]
  [12 24 25 22 10]
  [ 8 20 23 19 14]
  [ 4 15 11  7  3]
  */
  if(rows == 5)
  {
    for(let i = 0; i < 25; i++)
    {
      let currentChar = str.charAt(i);

      if(i == 0)
      {
        square[0].insert(0, currentChar);
      }
      else if(i == 1)
      {
        square[0].insert(4, currentChar);
      }
      else if(i == 2)
      {
        square[4].insert(i, currentChar);
      }
      else if(i == 3)
      {
        square[4].insert(0, currentChar);
      }
      else if(i == 4)
      {
        square[0].insert(1, currentChar);
      }
      else if(i == 5)
      {
        square[1].insert(4, currentChar);
      }
      else if(i == 6)
      {
        square[4].insert(1, currentChar);
      }
      else if(i == 7)
      {
        square[3].insert(0, currentChar);
      }
      else if(i == 8)
      {
        square[0].insert(2, currentChar);
      }
      else if(i == 9)
      {
        square[2].insert(4, currentChar);
      }
      else if(i == 10)
      {
        square[4].insert(1, currentChar);
      }
      else if(i == 11)
      {
        square[2].insert(0, currentChar);
      }
      else if(i == 12)
      {
        square[0].insert(3, currentChar);
      }
      else if(i == 13)
      {
        square[3].insert(4, currentChar);
      }
      else if(i == 14)
      {
        square[4].insert(1, currentChar);
      }
      else if(i == 15)
      {
        square[1].insert(0, currentChar);
      }
      else if(i == 16)
      {
        square[1].insert(1, currentChar);
      }
      else if(i == 17)
      {
        square[1].insert(2, currentChar);
      }
      else if(i == 18)
      {
        square[3].insert(1, currentChar);
      }
      else if(i == 19)
      {
        square[3].insert(1, currentChar);
      }
      else if(i == 20)
      {
        square[1].insert(2, currentChar);
      }
      else if(i == 21)
      {
        square[2].insert(1, currentChar);
      }
      else if(i == 22)
      {
        square[3].insert(2, currentChar);
      }
      else if(i == 23)
      {
        square[2].insert(1, currentChar);
      }
      else if(i == 24)
      {
        square[2].insert(2, currentChar);
      }
    }
    console.log(square);

    // Combine the row arrays & then concat them together
    let concat = [].concat.apply([], square);
    let string = concat.join("");
    console.log(string);
    return string;
  }
};


/*--------------------------------------------------------------------------------------*/
/*----------------------------------------DECODE----------------------------------------*/
/*--------------------------------------------------------------------------------------*/


InterlacedSpiralCipher.decode = function(str){
  // Insert function to properly place characters
  Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
  };
  // Find out number of rows to make a perfect square
	console.log("String length = " + str.length);
  let square = [];
  let sqrt = Math.sqrt(str.length);
  let rows = Math.ceil(sqrt);
  
  for(let i = 0; i < rows; i++)
  {
    square.push([]);
  }
  console.log(square);

  // Adding characters to rows for a 4 x 4 square
  if(rows == 4)
  {
    for(let i = 0; i < 16; i++)
    {
      let currentChar = str.charAt(i);
      if(square[0].length < 4)
      {
        square[0].push(currentChar);
      }
      else if(square[1].length < 4 && square[0].length == 4)
      {
        square[1].push(currentChar);
      }
      else if(square[2].length < 4 && square[1].length == 4)
      {
        square[2].push(currentChar);
      }
      else if(square[3].length < 4 && square[2].length == 4)
      {
        square[3].push(currentChar);
      }
    }
    console.log(square);

    let string = 
    square[0][0] + square[0][3] + square[3][3] + square[3][0]
    + square[0][1] + square[1][3] + square[3][2] + square[2][0]
    + square[0][2] + square[2][3] + square[3][1] + square[1][0]
    + square[1][1] + square[1][2] + square[2][2] + square[2][1]
    console.log(string);
    return string;
  }

  // Adding characters to rows for a 5 x 5 square
  if(rows == 5)
  {
    for(let i = 0; i < 25; i++)
    {
      let currentChar = str.charAt(i);
      if(square[0].length < 5)
      {
        square[0].push(currentChar);
      }
      else if(square[1].length < 5 && square[0].length == 5)
      {
        square[1].push(currentChar);
      }
      else if(square[2].length < 5 && square[1].length == 5)
      {
        square[2].push(currentChar);
      }
      else if(square[3].length < 5 && square[2].length == 5)
      {
        square[3].push(currentChar);
      }
      else if(square[4].length < 5 && square[3].length == 5)
      {
        square[4].push(currentChar);
      }
    }
    console.log(square);

    let string = 
    square[0][0] + square[0][4] + square[4][4] + square[4][0]
    + square[0][1] + square[1][4] + square[4][3] + square[3][0]
    + square[0][2] + square[2][4] + square[4][2] + square[2][0]
    + square[0][3] + square[3][4] + square[4][1] + square[1][0]
    + square[1][1] + square[1][3] + square[3][3] + square[3][1]
    + square[1][2] + square[2][3] + square[3][2] + square[2][1]
    + square[2][2];
    console.log(string);
    return string;
  }
};

InterlacedSpiralCipher.encode(phrase1); // `Rntodomiimuea  m`
InterlacedSpiralCipher.decode(phrase2); // `Sic transit gloria mundi ` 