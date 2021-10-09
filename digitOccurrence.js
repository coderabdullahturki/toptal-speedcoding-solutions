function digitOccurrence(n, x) {
    let s = "";
    for(let i = 0; i < n + 1; i++)
        s += i.toString();
         
    let count = 0;
    for(let i = 0; i < s.length; i++)
    {
        if (s.charAt(i) == x)
        {
            count++;
        }
    }
    return count;
 }
 