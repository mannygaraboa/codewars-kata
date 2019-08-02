function toUnderscore(string) {
  let stringArray = [];
  if(string >= 0)
  {
    string = string.toString();
  }
  for(i = 0; i < string.length; i++)
  {
    let currentChar = string.charAt(i);
    if(currentChar.match(/[a-z]/i))
    {
      if(currentChar === currentChar.toUpperCase() && i == 0)
      {
        currentChar = currentChar.toLowerCase();
      }
      else if(currentChar === currentChar.toUpperCase() && i > 0)
      {
        stringArray.push("_");
        currentChar = currentChar.toLowerCase();
      }
    }
    stringArray.push(currentChar);
  }
  console.log(stringArray);
  let snake_string = stringArray.join("");
  return snake_string;
}
toUnderscore(1); // ==> test_controller

// Other Solution:
  // var toUnderscore;

  //   toUnderscore = function(string) {
  //     return string.toString().split(/(?=[A-Z])/).join('_').toLowerCase();
  //   };