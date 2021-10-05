bList = ["b", "a", "n", "a", "n", "a", "s"]

//verison 1
function linear(char,arr) {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === char) {
      return i
    }
  }
  return undefined
}

//version 2
function linear(char,arr) {
  let out = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === char) {
      out.push(i)
    }
  }
  if (out.length === 0) {
    return undefined
  } else {
    return out
  }
}

console.log(linear("a", bList))
// # => [ 1, 3, 5 ]





