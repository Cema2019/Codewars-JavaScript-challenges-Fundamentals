/*Given an array of numbers (arr), check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.*/

function isVow(arr){
  // ascii codes for 'aeiou'
  let vowels = [97, 101, 105, 111, 117]; 

  // Map function to check if arr contains numbers whose ascii codes will return lower case vowels. If so, it will convert them inside the array.
  return arr.map(char => vowels.includes(char) ? String.fromCodePoint(char) : char);
}
