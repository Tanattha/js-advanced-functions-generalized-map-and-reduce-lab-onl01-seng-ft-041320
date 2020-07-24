
//map returns an array with operations
   
function map(src, operations) {
    let r = []
    for (let i = 0; i < src.length; i++) {
      //let theElement = src[i]
      r.push(operations(src[i]))
    }
    return r;
  }

  //returns a running total when given or not a starting point
  //returns true when all values are true
  //returns false when any value is false

  function reduce(src, conditions, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = conditions(src[i], r)
    }
  
    return r;
  }