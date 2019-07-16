function adjacentElementsProduct(array) {
  let productArr = [];
  for(let i = 0; i < array.length - 1; i++)
  {
    let product = array[i] * array[i+1];
    productArr.push(product);
  }
  productArr.sort(function(a, b) {return b - a})
  console.log(productArr);
  return productArr[0];
}
adjacentElementsProduct([1,5,2,7,4,8])

// Other Solution:
  // function adjacentElementsProduct(array) {
  //   let newArr = []
  //   for(i=0; i < array.length-1; i++){
  //     newArr.push(array[i]*array[i+1])
  //   }  
  //   return Math.max(...newArr)
  // }