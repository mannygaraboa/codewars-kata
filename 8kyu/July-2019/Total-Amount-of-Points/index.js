function points(games) {
  let totalPoints = 0;
  let xArr = [];
  let yArr = [];
  for(let i = 0; i < games.length; i++)
  {
    xArr.push(games[i].charAt(0));
    yArr.push(games[i].charAt(2));
  }
  for(let i = 0; i < 10; i++)
  {
    if(xArr[i] > yArr[i])
    {
      totalPoints += 3;
    }
    else if(xArr[i] == yArr[i])
    {
      totalPoints++;
    }
  }
  console.log(xArr);
  console.log(yArr);
  return totalPoints;
}
points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','3:4','4:3'])

// Other Solution:
  // const points=games=>games.reduce((output,current)=>{
  //   return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  // },0)

// Another Solution:
  // function points(games) {
  //   let total = 0;
  //   games.map(game => {
  //     if (game[0] === game[2]) {
  //       total += 1;
  //     } else if (game[0] > game[2]) {
  //       total += 3;
  //     }
  //   });
  //   return total;
  // }