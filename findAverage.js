function findAverage(x) {
 
    let n = x.length;
      let sum = 0;
          for (let i = 0; i < n; i++) sum += x[i];
   
          return Math.round(sum / n);
  };