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
        kmString = kmString.concat(directions[i][direcLength - 5], ".", directions[i][direcLength - 3]);
        let distance = Math.round(parseFloat(kmString));
        let distanceString = distance.toString();
        distanceString = distanceString.concat(0);
        let finalDistance = parseInt(distanceString);

        if(nsew == "N")
        {
          y += finalDistance;
        }
        else if(nsew == "S")
        {
          y -= finalDistance;
        }
        else if(nsew == "E")
        {
          x += finalDistance;
        }
        else if(nsew == "W")
        {
          x -= finalDistance;
        }
      }
      // Moving in meters
      else
      {
        let mString = "";
        mString = mString.concat(directions[i][direcLength - 4]);
        let distance = parseInt(mString, 10);
        console.log(distance);

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
      console.log("Current Coordinates: " + [x,y]);
    }

    // Making a Turn
    else if(directions[i][1] == "a")
    {
      console.log(directions[i]);
      if(directions[i][9] == "N")
      {
        if(directions[i][14] == "L")
        {
          if(nsew == "N")
          {
            y += 10;
            nsew = "W";
          }
          else if(nsew == "S")
          {
            y -= 10;
            nsew = "E";
          }
          else if(nsew == "E")
          {
            x += 10;
            nsew = "N";
          }
          else if(nsew == "W")
          {
            x -= 10;
            nsew = "S";
          }
        }
        else if(directions[i][14] == "R")
        {
          if(nsew == "N")
          {
            y += 10;
            nsew = "E";
          }
          else if(nsew == "S")
          {
            y -= 10;
            nsew = "W";
          }
          else if(nsew == "E")
          {
            x += 10;
            nsew = "S";
          }
          else if(nsew == "W")
          {
            x -= 10;
            nsew = "N";
          }
        }
      }
      else if(directions[i][9] == "2")
      {
        if(directions[i][13] == "L")
        {
          if(nsew == "N")
          {
            y += 20;
            nsew = "W";
          }
          else if(nsew == "S")
          {
            y -= 20;
            nsew = "E";
          }
          else if(nsew == "E")
          {
            x += 20;
            nsew = "N";
          }
          else if(nsew == "W")
          {
            x -= 20;
            nsew = "S";
          }
        }
        else if(directions[i][13] == "R")
        {
          if(nsew == "N")
          {
            y += 20;
            nsew = "E";
          }
          else if(nsew == "S")
          {
            y -= 20;
            nsew = "W";
          }
          else if(nsew == "E")
          {
            x += 20;
            nsew = "S";
          }
          else if(nsew == "W")
          {
            x -= 20;
            nsew = "N";
          }
        }
      }
      else if(directions[i][9] == "3")
      {
        if(directions[i][13] == "L")
        {
          if(nsew == "N")
          {
            y += 30;
            nsew = "W";
          }
          else if(nsew == "S")
          {
            y -= 30;
            nsew = "E";
          }
          else if(nsew == "E")
          {
            x += 30;
            nsew = "N";
          }
          else if(nsew == "W")
          {
            x -= 30;
            nsew = "S";
          }
        }
        else if(directions[i][13] == "R")
        {
          if(nsew == "N")
          {
            y += 30;
            nsew = "E";
          }
          else if(nsew == "S")
          {
            y -= 30;
            nsew = "W";
          }
          else if(nsew == "E")
          {
            x += 30;
            nsew = "S";
          }
          else if(nsew == "W")
          {
            x -= 30;
            nsew = "N";
          }
        }
      }
      else if(directions[i][9] == "4")
      {
        if(directions[i][13] == "L")
        {
          if(nsew == "N")
          {
            y += 40;
            nsew = "W";
          }
          else if(nsew == "S")
          {
            y -= 40;
            nsew = "E";
          }
          else if(nsew == "E")
          {
            x += 40;
            nsew = "N";
          }
          else if(nsew == "W")
          {
            x -= 40;
            nsew = "S";
          }
        }
        else if(directions[i][13] == "R")
        {
          if(nsew == "N")
          {
            y += 40;
            nsew = "E";
          }
          else if(nsew == "S")
          {
            y -= 40;
            nsew = "W";
          }
          else if(nsew == "E")
          {
            x += 40;
            nsew = "S";
          }
          else if(nsew == "W")
          {
            x -= 40;
            nsew = "N";
          }
        }
      }
      else if(directions[i][9] == "5")
      {
        if(directions[i][13] == "L")
        {
          if(nsew == "N")
          {
            y += 50;
            nsew = "W";
          }
          else if(nsew == "S")
          {
            y -= 50;
            nsew = "E";
          }
          else if(nsew == "E")
          {
            x += 50;
            nsew = "N";
          }
          else if(nsew == "W")
          {
            x -= 50;
            nsew = "S";
          }
        }
        else if(directions[i][13] == "R")
        {
          if(nsew == "N")
          {
            y += 50;
            nsew = "E";
          }
          else if(nsew == "S")
          {
            y -= 50;
            nsew = "W";
          }
          else if(nsew == "E")
          {
            x += 50;
            nsew = "S";
          }
          else if(nsew == "W")
          {
            x -= 50;
            nsew = "N";
          }
        }
      }
      console.log("Current Coordinates: " + [x,y]);
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
      console.log("Direction: " + nsew);
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