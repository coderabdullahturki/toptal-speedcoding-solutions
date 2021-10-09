function charCountInString(x, y) {
  
    let arr = y.split('');
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++) {
      if(x === arr[i]) {
        sum+=1;
      }
    }
    return sum;
  }