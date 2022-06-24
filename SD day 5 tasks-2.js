//Write a function called “addFive”.
//Given a number, “addFive” returns 5 added to that number.
var sum= 5
function addFive(){
    sum = sum+5;
}
var returnedValue = addFive();
console.log(sum);


//Write a function called “getOpposite”.
//Given a number, return its opposite
var num=5;
function getOpposite(num){
    opp= -(num)
}
var result= getOpposite(num)
console.log(opp)

//Fill in your code that takes an number minutes and converts it to seconds.
var min = 5;
function toSeconds(min) {
    secs= min*60
}
var result = toSeconds(min)
console.log(secs);

//Create a function that takes a string and returns it as an integer.

var mystr = "5";
function toInteger(mystr) {
    myint=parseInt( mystr)
}
var result = toInteger(mystr)
console.log(myint)

//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
var myint = 0;
function nextNumber(myint) {
    myNextint= myint+1
}
var result = nextNumber(myint)
console.log(myNextint)

//Create a function that takes an array and returns the first element.
var arr = [1, 2, 3];
function getFirstElement(arr) {
    getFirstElement= arr[0]
}
var data = getFirstElement(arr)
console.log(getFirstElement)

//Convert Hours into Seconds
//Write a function that converts hours into seconds.
var hours = 5;
function toSeconds(hours) {
    sec= hours*3600
}
var result = toSeconds(hours)
console.log(sec);

//Find the Perimeter of a Rectangle
//Create a function that takes height and width and finds the perimeter of a rectangle.
function findPerimeter(num1,num2) {
    peri= 2*(num1+num2)
}
var peri = findPerimeter(6,7)
console.log(peri)

//Less Than 100?
//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(num1,num2) {
    if(num1 +num2 <100){
        console.log(true);
    }else{
        console.log(false);
    }
}
var res = lessThan100(22,15)

//MacDonald is asking you to tell him how many legs can be counted among all his animals
function CountAnimals(tur,horse,pigs) {
    legs= (tur*2)+(horse*4)+(pigs*4)
}
var legs = CountAnimals(2,3,5)
console.log(legs);

//Frames Per Second
//Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
function frames(num1,num2) {
    frame= (num1*num2)*60
}
var fps = frames(1,2)
console.log(frame);

//Check if an Integer is Divisible By Five
//Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
function divisibleByFive(num1) {
    if(num1%5 ===0){
        console.log(true);
    }else{
        console.log(false);
    }
}
var divisible = divisibleByFive(5)

//Write a function called “isEven”.
//Given a number, “isEven” returns whether it is even.
function isEven(num){
    if(num%2 ===0){
        console.log(even);
    }else{
        console.log(odd);
    } 
   }
   var even = isEven(5)

//Write a function called “areBothOdd”.
//Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
function areBothOdd(num1, num2){
        if((num1 % 2===0) && (num2 % 2===0)){
            console.log(true)
        }else{
            console.log(false)
        }
   }
var Odd= areBothOdd(1,5)

//Write a function called “getFullName”.
//Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.
function getFullName(firstName, lastName){
    full= firstName+lastName
   }
var full= getFullName("Guvi","Geek")
console.log(full);

//Write a function called “getLengthOfWord”.
//Given a word, “getLengthOfWord” returns the length of the given word.
function getLengthOfWord(word1){
    length= word1.len
   }
var length = getLengthOfWord('Guvi')
console.log(length)

//Write a function called “isSameLength”.
//Given two words, “isSameLength” returns whether the given words have the same length.
function isSameLength(word1, word2){
    if(word1.len == word2.len){
        console.log(true);
    }else{
        console.log(false);
    }
   }

//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
count==0
var ar2 = function countPositivesSumNegatives(arr) {
    for (var i=0; i<arr.length; i++){
        if(i>0){
            count+=1
        }
        
    }

}
console.log(count);

//Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
function powersOfTwo(n){
    for (var i=0; i<n; i++){
        power=2**i
    }
  
    return res;
  }
console.log(power)

//Find the maximum number in an array of numbers

function findMax(ar){
    console.log(ar.max)
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
