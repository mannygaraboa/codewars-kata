function sortTransform(a){
  let a2 = [...a];
  let a3 = [...a];
  let a4 = [...a];
  let finalString = "";
  let word1 = "";
  let word2 = "";
  let word3 = "";
  let word4 = "";

  // Creating word1
  for(let i = 0; i < a.length; i++)
  {
    let newChar = String.fromCharCode(a[i]);
    if(i == 0 || i == 1 || i == (a.length - 1) || i == (a.length - 2))
    {
      word1 = word1.concat(newChar);
    }
  }

  // Creating word2
  a2.sort(function(a, b) {return a - b});
  console.log("word2 Sorting: " + a2);
  for(let i = 0; i < a2.length; i++)
  {
    let newChar = String.fromCharCode(a2[i]);
    if(i == 0 || i == 1 || i == (a2.length - 1) || i == (a2.length - 2))
    {
      word2 = word2.concat(newChar);
    }
  }

  // Creating word3
  a3.sort(function(a, b) {return b - a});
  console.log("word3 Sorting: " + a3);
  for(let i = 0; i < a3.length; i++)
  {
    let newChar = String.fromCharCode(a3[i]);
    if(i == 0 || i == 1 || i == (a3.length - 1) || i == (a3.length - 2))
    {
      word3 = word3.concat(newChar);
    }
  }

  // Creating word4
  for(let i = 0; i < a4.length; i++)
  {
    let newChar = String.fromCharCode(a4[i]);
    a4.splice(i, 1, newChar);
  }
  a4.sort();
  console.log("word4 Sorting: " + a4)
  for(let i = 0; i < a4.length; i++)
  {
    if(i == 0 || i == 1 || i == (a4.length - 1) || i == (a4.length - 2))
    {
      word4 = word4.concat(a4[i]);
    }
  }

  console.log("word1 = " + word1);
  console.log("word2 = " + word2);
  console.log("word3 = " + word3);
  console.log("word4 = " + word4);

  finalString = word1 + "-" + word2 + "-" + word3 + "-" + word4;
  return finalString;
}
sortTransform([51, 62, 73, 84, 95, 100, 99, 126]);

/*
  Other Solution:

  function sortTransform(a){
    let first = transform(a);
    let second = transform(a.sort((a,b) => a - b));
    let third = transform(a.sort((a,b) => b - a));
    return `${first}-${second}-${third}-${second}`;
  }

  let transform = (arr) => [...arr.slice(0,2), ...arr.slice(arr.length - 2)].map(a => String.fromCharCode(a)).join('');
*/