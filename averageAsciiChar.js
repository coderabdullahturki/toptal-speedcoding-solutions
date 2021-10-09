function averageAsciiChar(x)
    {
        let sum_char = 0;
   
        // loop to sum the ascii value of chars
        for (let i = 0; i < x.length; i++) {
            sum_char +=(x[i]).charCodeAt(0);
            
        }
   
        // Returning average of chars
        return String.fromCharCode(Math.round(sum_char / x.length));   
}