function satNav(directions) {
  let x = 0;
  let y = 0;
  let nsew = "";
  let coordinates = [x, y];

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
    }

    // Going Straight
    else if(directions[i][0] == "G")
    {
      let direcLength = directions[i].length;
      if(directions[i][direcLength - 2] == "k")
      {
        console.log(directions[i][direcLength - 2])
      }
      
      if(nsew == "N" || nsew == "E")
      {

      }
      else if(nsew == "S" || nsew == "W")
      {

      }
    }

    // Making a Turn
    else if(directions[i][1] == "a")
    {

    }

    // Making a U-Turn
    else if(directions[i][1] == "u")
    {

    }
  }
  console.log(nsew);

  return coordinates;
}
satNav(["Head WEST", 
        "Take the 2nd Left", 
        "Go straight on for 200m", 
        "Go straight on for 1.5km", 
        "Turn around!",
        "You have reached your destination!"]);