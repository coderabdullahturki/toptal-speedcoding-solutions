function isPrime(x) {
    
    let isPrime = true;

    if(x <= 1) {
        return false;
    }
    else if (x > 1) {
    
        // looping through 2 to number-1
        for (let i = 2; i < x; i++) {
            if (x % i == 0) {
                return isPrime = false;
                
            }
        }
    
        if (isPrime) {
            return(true);
        } else {
            return(false);
        }
    }
};