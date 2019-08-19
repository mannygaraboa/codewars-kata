const InterlacedSpiralCipher = {};
let phrase1A = `Romani ite domum`;
let phrase1B = `Rntodomiimuea  m`
let phrase2A = `Sic transit gloria mundi`;
let phrase2B = `Stsgiriuar i ninmd l otac`;

/*--------------------------------------------------------------------------------------*/
/*----------------------------------------ENCODE----------------------------------------*/
/*--------------------------------------------------------------------------------------*/

InterlacedSpiralCipher.encode = function(str){
  // Find out number of rows to make a perfect square
  console.log(str);
	console.log("String length = " + str.length);
  let square = [];
  let sqrt = Math.sqrt(str.length);
  let rows = Math.ceil(sqrt);
  
  for(let i = 0; i < rows; i++)
  {
    square.push([]);
  }
  console.log(square);
  console.log("# of rows: " + rows);

  let rowCount = 1;
  let sideCount = 0;
  let cornerCount = 0;
  let nextCycle = 1;
  let subCount = 1;
  for(let i = 0; i < rows**2; i++)
  {
    let currentChar = str.charAt(i);
    let nextChar1 = str.charAt(i+1);
    let nextChar2 = str.charAt(i+2);
    let nextChar3 = str.charAt(i+3);
    if(currentChar == "")
    {
      currentChar = " ";
    }
    if(nextChar1 == "")
    {
      nextChar1 = " ";
    }
    if(nextChar2 == "")
    {
      nextChar2 = " ";
    }
    if(nextChar3 == "")
    {
      nextChar3 = " ";
    }

    // Adding center of square
    if(i == rows**2 - 1 && rows % 2 != 0)
    {
      square[cornerCount].splice(cornerCount, 0, currentChar);
      console.log("Center Added!");
      console.log(square);
    }

    // Filling up the sides of square after corners
    else if((rows - rowCount) > nextCycle && cornerCount > sideCount)
    {
      square[sideCount].splice(rowCount, 0, currentChar);
      square[rowCount].splice((rows - rowCount) - subCount, 0, nextChar1);
      square[rows - nextCycle].splice(nextCycle, 0, nextChar2);
      square[(rows - rowCount) - 1].splice(sideCount, 0, nextChar3);
      i += 3
      rowCount++;
      console.log("Sides Added!");
      console.log(square);
    }
    // Setting up 4 corners of the square
      // For odd number of rows
      else if(square[cornerCount].length < rows && rowCount == nextCycle && rows % 2 != 0)
      {
        square[cornerCount].splice(cornerCount, 0, currentChar);
        square[cornerCount].splice((rows - subCount) - cornerCount, 0, nextChar1);
        square[(rows - rowCount)].splice((rows - subCount) - (cornerCount + 1), 0, nextChar2);
        square[(rows - rowCount)].splice(cornerCount, 0, nextChar3);
        cornerCount++;
        i += 3;
        console.log("Corners Added!");
        console.log(square);
      }
      // For even number of rows
      else if(square[cornerCount].length < rows && rowCount == nextCycle && rows % 2 == 0)
      {
        square[cornerCount].splice(cornerCount, 0, currentChar);
        square[cornerCount].splice((rows - subCount), 0, nextChar1);
        square[(rows - rowCount)].splice((rows - subCount) - (cornerCount), 0, nextChar2);
        square[(rows - rowCount)].splice(cornerCount, 0, nextChar3);
        cornerCount++;
        i += 3;
        console.log("Corners Added!");
        console.log(square);
      }
    // Next cycle of corners and sides
    else
    {
      nextCycle++;
      sideCount++;
      subCount++;
      rowCount = nextCycle;
      if(i != rows**2)
      {
        i--;
      }
      console.log("New Cycle!");
      console.log("cornerCount: " + cornerCount);
      console.log("rowCount: " + rowCount);
      console.log("sideCount: " + sideCount);
      console.log("subCount: " + subCount);
      console.log("nextCycle: " + nextCycle);
    }
  }
  console.log("Final Square:");
  console.log(square);
  
  // Combine the row arrays & then concat them together
  let concat = [].concat.apply([], square);
  let string = concat.join("");
  console.log(string);
  return string;
};

/*--------------------------------------------------------------------------------------*/
/*----------------------------------------DECODE----------------------------------------*/
/*--------------------------------------------------------------------------------------*/

InterlacedSpiralCipher.decode = function(str){
  // Find out number of rows to make a perfect square
  console.log(str);
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
      if(currentChar == "")
      {
        currentChar = " ";
      }

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
      if(currentChar == "")
      {
        currentChar = " ";
      }
      
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

InterlacedSpiralCipher.encode(phrase2A);
InterlacedSpiralCipher.decode(phrase2A);

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

// Previous Methods:
  // Array.prototype.insert = function ( index, item ) {
  //   this.splice( index, 0, item );
  // };

// arr.splice(index, 0, item); will insert item into arr at the specified index (deleting 0 items first, that is, it's just an insert).