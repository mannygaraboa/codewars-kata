function perimeter(n) {
  console.log(n);
  let fibArray = [1,1];
  let fibSum = 0;
  if(n >= 2)
  {
    for(let i = 0; (fibArray.length - 1)  < n; i++)
    {
      let fib = fibArray[i] + fibArray[i+1];
      fibArray.push(fib);
    }
    
    // Sum of fibArray
    for(let i = 0; i < fibArray.length; i++)
    {
      fibSum += fibArray[i];
    }

    console.log(fibArray);
    return 4 * fibSum;
  }
  else if(n == 1)
  {
    return 8;
  }
  else
  {
    return 4;
  }
}
perimeter(1);

/*
  Other Solution:

  function perimeter(n) {
    let arr = [1, 1];
    for(let i = 0; i < n - 1; i++) {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
    return 4 * arr.reduce((sum, num) => sum + num, 0);
  }
*/