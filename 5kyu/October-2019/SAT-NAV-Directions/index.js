function satNav(directions) {
  let x = 0;
  let y = 0;
  let nsew = "";

  for(let i = 0; i < directions.length; i++)
  {
    // Choose a direction to start
    if(i == 0)
    {
      if(directions[0][5] == "N")
      {
        nsew = "N";
      }
      else if(directions[0][5] == "S")
      {
        nsew = "S";
      }
      else if(directions[0][5] == "S")
      {
        nsew = "S";
      }
      else if(directions[0][5] == "E")
      {
        nsew = "E";
      }
      else if(directions[0][5] == "W")
      {
        nsew = "W";
      }
      console.log("Starting Direction: " + nsew);
    }
    
    // Going Straight
    else if(directions[i][0] == "G")
    {
      console.log(directions[i]);
      let direcLength = directions[i].length;

      // Moving in kilometers
      if(directions[i][direcLength - 2] == "k")
      {
        let kmString = "";
        kmString = kmString.concat(directions[i][direcLength - 5], directions[i][direcLength - 3]);
        let distance = (parseFloat(kmString));

        if(nsew == "N")
        {
          y += distance;
        }
        else if(nsew == "S")
        {
          y -= distance;
        }
        else if(nsew == "E")
        {
          x += distance;
        }
        else if(nsew == "W")
        {
          x -= distance;
        }
      }
      // Moving in meters
      else
      {
        let mString = "";
        mString = mString.concat(directions[i][direcLength - 4]);
        let distance = parseInt(mString, 10);

        if(nsew == "N")
        {
          y += distance;
        }
        else if(nsew == "S")
        {
          y -= distance;
        }
        else if(nsew == "E")
        {
          x += distance;
        }
        else if(nsew == "W")
        {
          x -= distance;
        }
      }
      console.log("--- Coordinates: " + [x,y] + " ---");
    }

    // Making a Turn
    else if(directions[i][1] == "a")
    {
      console.log(directions[i]);

      // NEXT Turn
      if(directions[i][9] == "N")
      {
        let xCord = x;
        let yCord = y;
        
        if(nsew == "N")
        {
          while(y % 10 != 0 || y == yCord)
          {
            y++;
          }
          if(directions[i][14] == "L")
          {
            nsew = "W";
          }
          else if(directions[i][14] == "R")
          {
            nsew = "E";
          }
        }
        else if(nsew == "S")
        {
          while(y % 10 != 0 || y == yCord)
          {
            y--;
          }
          if(directions[i][14] == "L")
          {
            nsew = "E";
          }
          else if(directions[i][14] == "R")
          {
            nsew = "W";
          }
        }
        else if(nsew == "E")
        {
          while(x % 10 != 0 || x == xCord)
          {
            x++;
          }
          if(directions[i][14] == "L")
          {
            nsew = "N";
          }
          else if(directions[i][14] == "R")
          {
            nsew = "S";
          }
        }
        else if(nsew == "W")
        {
          while(x % 10 != 0 || x == xCord)
          {
            x--;
          }
          if(directions[i][14] == "L")
          {
            nsew = "S";
          }
          else if(directions[i][14] == "R")
          {
            nsew = "N";
          }
        }
      }
      // 2nd Turn
      else if(directions[i][9] == "2")
      {
        if(nsew == "N")
        {
          y += 10;
          let yCord = y;
          while(y % 10 != 0 || y == yCord)
          {
            y++;
          }
          if(directions[i][13] == "L")
          {
            nsew = "W";
          }
          else if(directions[i][13] == "R")
          {
            nsew = "E";
          }
        }
        else if(nsew == "S")
        {
          y -= 10;
          let yCord = y;
          while(y % 10 != 0 || y == yCord)
          {
            y--;
          }
          if(directions[i][13] == "L")
          {
            nsew = "E";
          }
          else if(directions[i][13] == "R")
          {
            nsew = "W";
          }
        }
        else if(nsew == "E")
        {
          x += 10;
          let xCord = x;
          while(x % 10 != 0 || x == xCord)
          {
            x++;
          }
          if(directions[i][13] == "L")
          {
            nsew = "N";
          }
          else if(directions[i][13] == "R")
          {
            nsew = "S";
          }
        }
        else if(nsew == "W")
        {
          x -= 10;
          let xCord = x;
          while(x % 10 != 0 || x == xCord)
          {
            x--;
          }
          if(directions[i][13] == "L")
          {
            nsew = "S";
          }
          else if(directions[i][13] == "R")
          {
            nsew = "N";
          }
        }
      }
      // 3rd Turn
      else if(directions[i][9] == "3")
      {
        if(nsew == "N")
        {
          y += 20;
          let yCord = y;
          while(y % 10 != 0 || y == yCord)
          {
            y++;
          }
          if(directions[i][13] == "L")
          {
            nsew = "W";
          }
          else if(directions[i][13] == "R")
          {
            nsew = "E";
          }
        }
        else if(nsew == "S")
        {
          y -= 20;
          let yCord = y;
          while(y % 10 != 0 || y == yCord)
          {
            y--;
          }
          if(directions[i][13] == "L")
          {
            nsew = "E";
          }
          else if(directions[i][13] == "R")
          {
            nsew = "W";
          }
        }
        else if(nsew == "E")
        {
          x += 20;
          let xCord = x;
          while(x % 10 != 0 || x == xCord)
          {
            x++;
          }
          if(directions[i][13] == "L")
          {
            nsew = "N";
          }
          else if(directions[i][13] == "R")
          {
            nsew = "S";
          }
        }
        else if(nsew == "W")
        {
          x -= 20;
          let xCord = x;
          while(x % 10 != 0 || x == xCord)
          {
            x--;
          }
          if(directions[i][13] == "L")
          {
            nsew = "S";
          }
          else if(directions[i][13] == "R")
          {
            nsew = "N";
          }
        }
      }
      // 4th Turn
      else if(directions[i][9] == "4")
      {
        if(nsew == "N")
        {
          y += 30;
          let yCord = y;
          while(y % 10 != 0 || y == yCord)
          {
            y++;
          }
          if(directions[i][13] == "L")
          {
            nsew = "W";
          }
          else if(directions[i][13] == "R")
          {
            nsew = "E";
          }
        }
        else if(nsew == "S")
        {
          y -= 30;
          let yCord = y;
          while(y % 10 != 0 || y == yCord)
          {
            y--;
          }
          if(directions[i][13] == "L")
          {
            nsew = "E";
          }
          else if(directions[i][13] == "R")
          {
            nsew = "W";
          }
        }
        else if(nsew == "E")
        {
          x += 30;
          let xCord = x;
          while(x % 10 != 0 || x == xCord)
          {
            x++;
          }
          if(directions[i][13] == "L")
          {
            nsew = "N";
          }
          else if(directions[i][13] == "R")
          {
            nsew = "S";
          }
        }
        else if(nsew == "W")
        {
          x -= 30;
          let xCord = x;
          while(x % 10 != 0 || x == xCord)
          {
            x--;
          }
          if(directions[i][13] == "L")
          {
            nsew = "S";
          }
          else if(directions[i][13] == "R")
          {
            nsew = "N";
          }
        }
      }
      // 5th Turn
      else if(directions[i][9] == "5")
      {
        if(nsew == "N")
        {
          y += 40;
          let yCord = y;
          while(y % 10 != 0 || y == yCord)
          {
            y++;
          }
          if(directions[i][13] == "L")
          {
            nsew = "W";
          }
          else if(directions[i][13] == "R")
          {
            nsew = "E";
          }
        }
        else if(nsew == "S")
        {
          y -= 40;
          let yCord = y;
          while(y % 10 != 0 || y == yCord)
          {
            y--;
          }
          if(directions[i][13] == "L")
          {
            nsew = "E";
          }
          else if(directions[i][13] == "R")
          {
            nsew = "W";
          }
        }
        else if(nsew == "E")
        {
          x += 40;
          let xCord = x;
          while(x % 10 != 0 || x == xCord)
          {
            x++;
          }
          if(directions[i][13] == "L")
          {
            nsew = "N";
          }
          else if(directions[i][13] == "R")
          {
            nsew = "S";
          }
        }
        else if(nsew == "W")
        {
          x -= 40;
          let xCord = x;
          while(x % 10 != 0 || x == xCord)
          {
            x--;
          }
          if(directions[i][13] == "L")
          {
            nsew = "S";
          }
          else if(directions[i][13] == "R")
          {
            nsew = "N";
          }
        }
      }
      console.log("--- Coordinates: " + [x,y] + " ---");
      console.log("--- Facing Direction: " + nsew + " ---");
    }

    // Making a U-Turn
    else if(directions[i][1] == "u")
    {
      console.log(directions[i]);
      if(nsew == "N")
      {
        nsew = "S";
      }
      else if(nsew == "S")
      {
        nsew = "N";
      }
      else if(nsew == "E")
      {
        nsew = "W";
      }
      else if(nsew == "W")
      {
        nsew = "E";
      }
      console.log("--- Facing Direction: " + nsew + " ---");
    }

    // Arrived at Destination
    else if(directions[i][0] == "Y")
    {
      console.log("Final Facing Direction: " + nsew);
      console.log("Reached Destination!");
      return [x,y];
    }
  }
}
satNav(["Head WEST", 
        "Take the 2nd Left", 
        "Go straight on for 200m",
        "Take the NEXT Right", 
        "Go straight on for 1.5km", 
        "Turn around!",
        "You have reached your destination!"]);
/* satNav(["Head EAST",  
        "Take the 2nd LEFT",
        "Take the NEXT LEFT",
        "Take the NEXT LEFT",
        "Go straight on for 1.5km",
        "Take the NEXT RIGHT",
        "Take the 2nd RIGHT",
        "Go straight on for 1.7km",
        "Turn around!",
        "Take the NEXT LEFT",
        "Go straight on for 1.0km",
        "You have reached your destination!"]);
*/

/*
  Other Solution:

  function satNav(directions) {
    //using units of 100m
    let x = 0;
    let y = 0;
    let heading = directions[0].match(/NORTH|SOUTH|EAST|WEST/)[0];
    
    function turnAround() {
      switch (heading) {
        case 'NORTH': heading = 'SOUTH'; break;
        case 'SOUTH': heading = 'NORTH'; break;
        case 'WEST': heading = 'EAST'; break;
        case 'EAST': heading = 'WEST'; break;
      }
    }
    
    function turn(dist, dir) {
      switch (heading) {
        case 'NORTH': 
          y = Math.floor((y + dist)/10) * 10;
          if (dir == 'RIGHT') heading = 'EAST'
            else heading = 'WEST';
          break;
        case 'SOUTH': 
          y = Math.ceil((y - dist)/10) * 10;
          if (dir == 'RIGHT') heading = 'WEST'
            else heading = 'EAST';
          break;
        case 'WEST': 
          x = Math.ceil((x - dist)/10) * 10;  
          if (dir == 'RIGHT') heading = 'NORTH'
            else heading = 'SOUTH';
          break;
        case 'EAST': 
          x = Math.floor((x + dist)/10) * 10;  
          if (dir == 'RIGHT') heading = 'SOUTH'
            else heading = 'NORTH';
          break;
      }
    }
    
    function goStraight(dist) {
      switch (heading) {
        case 'NORTH': y += dist; break;
        case 'SOUTH': y -= dist; break;
        case 'WEST': x -= dist; break;
        case 'EAST': x += dist; break;
      }
    }
    
    
    for (let i = 1; i < directions.length - 1; i++) {
      //determine the type of instruction (there are three types, first word differs)
      switch (directions[i].split(' ')[0]) {
        case 'Turn': 
          turnAround();
          break;
        case 'Take':
          let dist = directions[i].match(/NEXT|\d/)[0];
          if (dist == 'NEXT') dist = 1;
          let dir = directions[i].match(/LEFT|RIGHT/)[0];
          turn(dist * 10, dir);
          break;
        case 'Go': 
          let strDist = directions[i].match(/\d+\.\d*(?=km)/);
          if (strDist !== null) strDist = Number(strDist[0]) * 10
          else {
            strDist = directions[i].match(/\d+(?=m)/);
            if (strDist !== null) strDist = Number(strDist[0]) / 100;
          }
          goStraight(strDist);
          break;
        }
    }
    return [x, y];
  }
*/