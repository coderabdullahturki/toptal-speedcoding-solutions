function twoArrayAvg(x, y)  {
    let n1 = x.length;
    let n2 = y.length;
  
      let sum1 = 0;
      let sum2 = 0;
      let sum3 = 0;
          for (let i = 0; i < n1; i++) sum1 += x[i];
          for (let i = 0; i < n2; i++) sum2 += y[i];
          sum3 = (sum1/n1) + (sum2/n2);
          return sum3 / 2;
  };