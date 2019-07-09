function isValidWalk(walk) {
  let x = 0;
  let y = 0;
  for(let i = 0; i < walk.length; i++)
  {
    if(walk[i] == "n")
    {
      y++;
    }
    else if(walk[i] == "s")
    {
      y--;
    }
    else if(walk[i] == "e")
    {
      x++;
    }
    if(walk[i] == "w")
    {
      x--;
    }
  }
  if(x == 0 && y == 0 && walk.length == 10)
  {
    return true;
  }
  else
  {
    return false;
  }
}
isValidWalk(["n", "s", "s", "w", "w", "n", "e", "n", "e", "s"])

// Other Solution:

// function isValidWalk(walk) {
//   var dx = 0
//   var dy = 0
//   var dt = walk.length
  
//   for (var i = 0; i < walk.length; i++) {
//     switch (walk[i]) {
//       case 'n': dy--; break
//       case 's': dy++; break
//       case 'w': dx--; break
//       case 'e': dx++; break
//     }
//   }
  
//   return dt === 10 && dx === 0 && dy === 0
// }