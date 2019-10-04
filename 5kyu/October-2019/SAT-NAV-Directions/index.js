function satNav(directions) {
  let x = 0;
  let y = 0;
  let nsew = "";
  let coordinates = [x, y];

  // Choose a direction to start
  for(let i = 0; i < directions.length; i++)
  {
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
  }
  
  return coordinates;
}
satNav(["Head EAST", 
        "Take the 2nd Left", 
        "Go straight on for 200m", 
        "Go straight on for 1.5km", 
        "Turn around!",
        "You have reached your destination!"]);