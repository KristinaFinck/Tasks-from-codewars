let price
function saleHotdogs(n){
  if (n < 5) {
    price = 100;
  } else if (n >=5 && n < 10) {
    price = 95;
  } else {
    price = 90;
  }
  return price*n;
}

console.log(saleHotdogs(5));
//https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript
