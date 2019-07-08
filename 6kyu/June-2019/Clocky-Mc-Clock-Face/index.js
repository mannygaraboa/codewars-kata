var whatTimeIsIt = function(angle) {
  let hour = 0;
  let minute = 0;
  if(angle <= 29.9 || angle == 360)
  {
    hour = 12;
    if(angle == 360)
    {
      minute == 0;
    }
    else
    {
      for(let i = 0.5; i <= angle; i+=0.5)
      {
        minute += 1;
      }
    }
  }

  if(angle >= 30 && angle < 360)
  {
    while(angle > 29.9)
    {
      angle -= 30;
      hour++;
    }
    for(let i = 0.5; i <= angle; i+=0.5)
    {
      minute += 1;
    }
  }

  if(minute <= 9 && hour <= 9)
  {
    return "0" + hour + ":0" + minute;
  }
  else if(minute <= 9 && hour >= 10)
  {
    return hour + ":0" + minute;
  }
  else if(minute >= 10 && hour >= 10)
  {
    return hour + ":" + minute;
  }
  else if(minute >= 10 && hour <= 9)
  {
    return "0" + hour + ":" + minute;
  }
}
whatTimeIsIt(31);

// Shorter Solution:

// var whatTimeIsIt = function(angle) {
//   let h = ~~(angle/30), m = ~~((angle%30)*2);
//   return `${h==0?12:h>9?h:"0"+h}:${m>9?m:"0"+m}`
// }

// Another Solution:

// var whatTimeIsIt = function(angle) {
//   let hour = Math.floor(angle/30), minutes = Math.floor((angle%30)*2);
//   if (hour < 10){hour = "0"+ hour;}
//   if (hour <= 0){hour = 12;}
//   if (minutes < 10){minutes = "0" + minutes;}
//     return hour + ":" + minutes;
// }