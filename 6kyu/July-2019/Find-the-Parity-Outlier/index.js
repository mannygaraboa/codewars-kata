function findOutlier(integers){
  let evens = []
  let odds = [];
  for(let i = 0; i < integers.length; i++)
  {
    let num = integers[i]
    if(num % 2 == 0)
    {
      evens.push(num);
    }
    else
    {
      odds.push(num);
    }
  }
  if(evens.length > odds.length)
  {
    return odds[0];
  }
  else
  {
    return evens[0];
  }
}
findOutlier([2,6,8,10,3])

// Other Solution:
  // function findOutlier(int){
  //   var even = int.filter(a=>a%2==0);
  //   var odd = int.filter(a=>a%2!==0);
  //   return even.length==1? even[0] : odd[0];
  // }