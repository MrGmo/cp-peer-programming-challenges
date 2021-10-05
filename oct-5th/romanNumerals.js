function roman (num) {
    let romanArr = [['M',1000], ['CM', 900], ['D', 500], ['CD', 400], ['C',100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['V', 5], ['IV', 4], ['I', 1]]
  
    if (num === 0) {
      return ''
    }
  
    for (let i = 0; i < romanArr.length; i++) {
      let value = romanArr[i][1]
      if (num >= value) {
        return romanArr[i][0] + roman(num-value)
      }
    }
  }
  
  console.log(roman(4))
  //IV
  console.log(roman(44))
  //'XLIV'
  console.log(roman(944))
  //'CMXLIV'
  console.log(roman(150))
  //CL