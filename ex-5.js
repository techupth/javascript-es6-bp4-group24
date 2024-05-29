function sum(...array) {
  // Start coding here !
  function inSum(accumulator,currentValue){
      return accumulator+currentValue;
  }

  let result =array.reduce(inSum,0)
  return result;

}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);