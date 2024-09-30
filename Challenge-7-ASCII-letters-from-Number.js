function convert(number){
  // ...Convert integers given as string into ASCII uppercase letters...
  const str = '733276';
const arr = str.match(/.{1,2}/g);
console.log(arr)

for (const i of arr){
  console.log(String.fromCharCode(i))
}
}

// Still in progress.....
