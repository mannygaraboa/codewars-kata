function cakes(recipe, available) {
  // Converts Objects into arrays to determine
  // if available has the ingredients for recipe
  let recipeArr = [];
  let availableArr = [];
  for(let ingredient in recipe)
  {
    if(recipe.hasOwnProperty(ingredient))
    {
      let innerArray = [];
      innerArray = [ingredient, recipe[ingredient]];
      recipeArr.push(innerArray);
    }
  }
  for(let ingredient in available)
  {
    if(available.hasOwnProperty(ingredient))
    {
      let innerArray = [];
      innerArray = [ingredient, available[ingredient]];
      availableArr.push(innerArray);
    }
  }
  console.log(recipeArr);
  console.log(availableArr);

  // Compares both arrays to determine 
  // if there are ingredients in available to use in recipe
  let trueCount = 0;
  let made = []
  for(let i = 0; i < recipeArr.length; i++)
  {
    for(let j = 0; j < availableArr.length; j++)
    {
      if(((recipeArr[i])[0]) == ((availableArr[j])[0]))
      {
        trueCount++;
        let mod = ((availableArr[j])[1]) % ((recipeArr[i])[1]);
        let mod2 = ((availableArr[j])[1]) - mod;
        let times = mod2 / ((recipeArr[i])[1]);
        made.push(times);
      }
    }
  }
  console.log(trueCount);
  console.log(made);

  // If ingredients in available can be used in recipe
  if(trueCount == recipeArr.length)
  {
    made.sort(function(a,b) {return a-b});
    return made[0];
  }
  else
  {
    return 0;
  }
}
cakes({"apples":38,"sugar":75,"oil":0}, {"crumbles":5500,"sugar":9300,"pears":4800,"oil":9700,"cream":7000,"milk":5100,"flour":7000,"eggs":3000,"butter":5500,"chocolate":1300,"cocoa":1600,"apples":900,"nuts":1200})
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

// To push both Key & Value of Obj into an Array:
  // var arr = [];
  // for (var prop in obj) {
  //  if (obj.hasOwnProperty(prop)) {
  //    var innerObj = {};
  //    innerObj[prop] = obj[prop];
  //    arr.push(innerObj)
  //  }
  // }

// Other Solution:
  // function cakes(recipe, available) {
  //   return Object.keys(recipe).reduce(function(val, ingredient) {
  //     return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
  //   }, Infinity)  
  // }