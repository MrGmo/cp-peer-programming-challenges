function fib (num) {
    let arr = [0, 1]
    let counter = 1
    while (counter < num) {
      let sum = arr[counter] + arr[counter-1]
      arr.push(sum)
      counter++
    }
    return arr.pop()
}
  
  console.log(fib(12))
  //144
  console.log(fib(16))
  //987