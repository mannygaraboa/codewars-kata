const InterlacedSpiralCipher = {};
let phrase1A = `Romani ite domum`;
let phrase1B = `Rntodomiimuea  m`
let phrase2A = `Sic transit gloria mundi`;
let phrase2B = `Stsgiriuar i ninmd l otac`;
let phrase7 = `kJycgLei&emcG)]fGJR$T^:(_:@<+Zw@IN=$f/c:`;
let phrase8 = `@}]}-rK.;$hc%Y:o!(k%C=iA@?TIw/@zUXKisbh_@f&=AOY+@s;a'VuK`;

/*--------------------------------------------------------------------------------------*/
/*----------------------------------------ENCODE----------------------------------------*/
/*--------------------------------------------------------------------------------------*/

InterlacedSpiralCipher.encode = function(str){
  // Find out number of rows to make a perfect square
  console.log("ENCODE: " + str);
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

    // Adding center of square if number of rows is odd
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
  console.log("FINAL STRING: " + string);
  return string;
};

/*--------------------------------------------------------------------------------------*/
/*----------------------------------------DECODE----------------------------------------*/
/*--------------------------------------------------------------------------------------*/

InterlacedSpiralCipher.decode = function(str){
  // Find out number of rows to make a perfect square
  console.log("DECODE: " + str);
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

  let currentRow = 0;
  for(i = 0; i < rows**2; i++)
  {
    let currentChar = str.charAt(i);
    if(currentChar == "")
    {
      currentChar = " ";
    }
    
    if(square[currentRow].length < rows)
    {
      square[currentRow].push(currentChar);
    }
    else
    {
      currentRow++;
      square[currentRow].push(currentChar);
    }
  }
  console.log(square);

  // Creating new string from square array
  let finalArray = [];
  let rowCount = 1;
  let sideCount = 0;
  let cornerCount = 0;
  let nextCycle = 1;
  let subCount = 1;
  let subCount2 = 1;
  while(finalArray.length < rows**2)
  {
    // Grabbing corners
    if(cornerCount < nextCycle)
    {
      finalArray.push(square[cornerCount][cornerCount]);
      finalArray.push(square[cornerCount][rows - subCount]);
      finalArray.push(square[rows - subCount][rows - subCount]);
      finalArray.push(square[rows - subCount][cornerCount]);
      cornerCount++;
    }

    // Grabbing sides
    else if(cornerCount == nextCycle && rowCount < (rows - subCount))
    {
      finalArray.push(square[sideCount][rowCount]);
      finalArray.push(square[rowCount][rows - subCount]);
      finalArray.push(square[rows - subCount][(rows - subCount2) - rowCount]);
      finalArray.push(square[(rows - subCount) - rowCount][sideCount]);
      rowCount++;
    }

    // Next Cycle
    else
    {
      nextCycle++;
      subCount++;
      sideCount++;
      rowCount = nextCycle;
    }
  }

  // Clear out empty spaces at the end of finalArray
  for(let i = finalArray.length - 1; i > 0; i--)
  {
    if(finalArray[i] == " ")
    {
      finalArray.pop();
    }
    else
    {
      break;
    }
  }
  console.log(finalArray);
  let string = finalArray.join("");
  console.log("FINAL STRING: " + string);
  return string;
};
InterlacedSpiralCipher.encode(phrase2B);
InterlacedSpiralCipher.decode(phrase2B);

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