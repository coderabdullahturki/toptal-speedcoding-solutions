function numberOfCircles(x) {
    let sum = 0;
    num1 = x.toString().match(/[0698]/g)
    
    if(num1 == null) {
        return sum = 0;
    } else
    sum += num1.length;

    for(let i = 0; i < num1.length; i++) {
        if(num1[i] == 8) sum += 1;
       
    }
    return sum;
};