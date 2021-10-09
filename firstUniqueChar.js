function firstUniqueChar(x) {
  
    let freqCounter = [];
  
    x.split('').forEach(ch => {
        if (!freqCounter[ch])
            freqCounter[ch] = 1;
        else
            freqCounter[ch]++;
    });
  
    freqCounter
  
    for (let i = 0; i < x.length - 1; i++) {
        let ch = x[i];
        if (freqCounter[ch] == 1)
            return ch;
    }
    return false;
    
  };