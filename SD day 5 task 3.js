//(1) Print odd numbers in an array
const a=[10,23,45,34,60,91,53];
const odd = a.filter(number => {
  return number %2 !== 0;
});
console.log(odd);

//(2) Convert all the strings to title caps in a string array
function toTitleCase(str){
  str= str.toLowerCase().split(' ');
  for(var i=0 ; i<str.length; i++){
    str[i]= str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}
console.log(toTitleCase("hi there i am working with guvi"));

//(3) Sum of all numbers in an array
const array =[1,3,6,8];
let sum=0;
for (let j=0 ; j<array.length; j++){
  sum += array[j];
}
console.log(sum);

//(4) Return all prime numbers in an array
function aprime(num){
  var prime=[];
  for(var k=0 ; k<= num ; k++){
    var primenum = false ;
    for(var l=2; l<=k ; l++){
      if (k%l==0 && l!=k){
        primenum = true;
      }
    }
    if (primenum=== false){
      prime.push(k);
    }
  }
  return prime;
}
console.log(prime);

//(5) return all the palindromes in an array
let palin=(arr) => {
  let isPalindrome = true;
  for (let i=0 ; i<arr.length/2 ; i++){
    if(arr[i] !== arr[arr.length - i - 1]){
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome;
}