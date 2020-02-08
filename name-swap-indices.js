// name swap indices challenge

// add array indices/indexes


function nameSwap(str) {

// turn string into an array of words and assign to variable "array"
    var arr = str.split(" ")
// return the array at the index of 1, followed by a space, then the array at index 0
    return arr[1] + ' ' + arr[0]
  }
  
  console.log(nameSwap('abraham lincoln'))