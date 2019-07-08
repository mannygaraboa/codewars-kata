function likes(names) {
  let arr = names;
  if(arr.length == 0)
  {
    return "no one likes this";
  }
  else if(arr.length == 1)
  {
    return arr[0] + " likes this";
  }
  else if(arr.length == 2)
  {
    return arr[0] + " and " + arr[1] + " like this";
  }
  else if(arr.length == 3)
  {
    return arr[0] + ", " + arr[1] + " and " + arr[2] + " like this";
  }
  else if(arr.length >= 4)
  {
    let others = arr.length - 2;
    return arr[0] + ", " + arr[1] + " and " + others + " others like this";
  }
}
likes(["Mike", "John", "Bob", "Joe"])

// Other Solution:

// function likes(names) {
//   names = names || [];
//   switch(names.length){
//     case 0: return 'no one likes this'; break;
//     case 1: return names[0] + ' likes this'; break;
//     case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
//     case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
//     default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//   }
// }