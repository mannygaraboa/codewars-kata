function buildSquare(blocks) {
  // Declaring Arrays for each type of block
  let blocks1 = [];
  let blocks2 = [];
  let blocks3 = [];
  let blocks4 = [];

  // Declaring Square Array
  let square = [];

  // Sorting through blocks to group them by size
  for(let i = 0; i < blocks.length; i++)
  {
    let currentBlock = blocks[i];
    if(currentBlock == 1)
    { 
      blocks1.push(currentBlock);
    }
    else if(currentBlock == 2)
    {
      blocks2.push(currentBlock);
    }
    else if(currentBlock == 3)
    {
      blocks3.push(currentBlock);
    }
    else if(currentBlock == 4)
    {
      blocks4.push(currentBlock);
    }
  }
  console.log(blocks1);
  console.log(blocks2);
  console.log(blocks3);
  console.log(blocks4);


  // Constructing Square
  if(blocks4.length > 0 && square.length < 4)
  {
    for(let i = 0; i < blocks4.length; i++)
    {
      square.push(blocks4[i]);
      blocks4.splice(i, 1);
      console.log("Pushed 1 '4'. Remaining 4's: " + blocks4);
      i--;
      if(square.length == 4)
      {
        break;
      }
    }
  }

  if(blocks3.length > 0 && blocks1.length > 0 && square.length < 4)
  for(let i = 0; i < blocks3.length; i++)
  {
    if(blocks3.length > 0 && blocks1.length > 0)
    {
      let block3Num = blocks3[i];
      let block1Num = blocks1[i];
      let sum = block3Num + block1Num;

      console.log("Sum for 3 & 1 = " + sum);
      square.push(sum);

      blocks3.splice(i, 1);
      blocks1.splice(i, 1);
      console.log("Pushed 1 '3'. Remaining 3's: " + blocks3);
      console.log("Pushed 1 '1'. Remaining 1's: " + blocks1);
      i--;
    }
    
    if(square.length == 4)
    {
      break;
    }
  }

  if(blocks2.length > 0 && square.length < 4)
  for(let i = 0; i < blocks2.length; i++)
  {
    if((blocks2.length >= 1 && blocks1.length >= 2) || (blocks2.length >= 2))
    {
      let sum = 0;
      let block2Num = blocks2[i];
      let block2Num2 = blocks2[i+1];
      let block1Num = blocks1[i];
      let block1Num2 = blocks1[i+1];
      
      if(blocks2.length == 1)
      {
        sum = block2Num + (block1Num + block1Num2);
        console.log("Sum for 2 & (1 + 1) = " + sum);
        square.push(sum);
        blocks2.splice(i, 1);
        blocks1.splice(i, 2);
        console.log("Pushed 1 '2'. Remaining 2's: " + blocks2);
        console.log("Pushed 2 '1'. Remaining 1's: " + blocks1);
        i--;
      }
      else if(block2Num2 == 2)
      {
        sum = block2Num + block2Num2;
        console.log("Sum for 2 & 2 = " + sum);
        square.push(sum);
        blocks2.splice(i, 2);
        console.log("Pushed 2 '2'. Remaining 2's: " + blocks2);
        i--;
      }
    }

    if(square.length == 4)
    {
      break;
    }
  }

  if(blocks1.length > 0 && square.length < 4)
  for(let i = 0; i < blocks1.length; i++)
  {
    if(blocks1.length >= 4)
    {
      let sum = blocks1[i] + blocks1[i+1] + blocks1[i+2] + blocks1[i+3];
      square.push(sum);
      blocks1.splice(i, 4);
      console.log("Pushed 4 '1'. Remaining 1's: " + blocks1);
      i--;
    }

    if(square.length == 4)
    {
      break;
    }
  }
  
  console.log("Square = " + square);

  // Checking if Square is valid
  if(square.length == 4)
  {
    return true;
  }
  else
  {
    return false;
  }
}
buildSquare([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])

// Other Solution:
  // function buildSquare(blocks) {
  //   let arr = [null, 0, 0, 0, 0], s = 0;
  //   blocks.forEach(v => arr[v]++);
  //   s = arr[4] + Math.floor(arr[2] / 2) + Math.min(arr[1], arr[3]);
  //   arr[2] -= Math.floor(arr[2] / 2) * 2;
  //   arr[1] -= Math.min(arr[1], arr[3]);
  //   arr[3] -= Math.min(arr[1], arr[3]);
  //   s += Math.min(Math.floor(arr[1] / 2), arr[2]);
  //   arr[1] -= Math.min(Math.floor(arr[1] / 2), arr[2]) * 2;
  //   arr[2] -= Math.min(Math.floor(arr[1] / 2), arr[2]);
  //   s += Math.floor(arr[1] / 4);
  //   return s >= 4;
  // }