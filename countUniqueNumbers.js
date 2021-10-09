function countUniqueNumbers(x) {
    
    return x.reduce((acc, val, ind, array) => {
     if(array.lastIndexOf(val) === ind){
        return ++acc;
     };
     return acc;
     }, 0);
 };
 