function findMultiples(integer, limit) {
    //your code here
   let multiples = [];
    for (let i = integer; i <= limit; i += integer ) {
      multiples.push(i);
      }
     return multiples;
    }