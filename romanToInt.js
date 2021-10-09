function romanToInt(x) {
    // Roman numeral symbol to number converter
    const convert = {
     I: 1,
     V: 5,
     X: 10,
     L: 50,
     C: 100,
     D: 500,
     M: 1000,
   };
 
   return Array.from(x) // generate an array from str
     .map(item => convert[item] ?? 0) // map each symbol to a value
     .reduce( // process each symbol
       (sum, item, index, arr) =>
         // sum up the value, correct if the previous one is a subtraction notation
         index > 0 && arr[index - 1] < item
           ? sum + item - arr[index - 1] - arr[index - 1]
           : sum + item,
       0 // initialize the sum
     );
 };