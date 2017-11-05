/////////////////////////////////////////////////////////////////////////////////////////
// Reverse words
/////////////////////////////////////////////////////////////////////////////////////////

function reverseWords(str) {
  var arr = str.split(' ');                             // split into an array of separate words
  
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('').reverse().join('');       // reverse each word individually
  }
  return arr.join(' ');                                 // join array into string + spaces
}

////////////////////
// Best practice:
// Code by OverZealous, mrkishi, adriaanbaelus, jnicol, chenglou, vas3a (plus 322 more warriors)

function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}

/////////////////////////////////////////////////////////////////////////////////////////
// Replace With Alphabet Position
/////////////////////////////////////////////////////////////////////////////////////////

function alphabetPosition(text) {
  var upper = text.toUpperCase();                                       // make string uniform upper case
  var numStr = '';                                                      // where solution will be stored
  
  for (var i = 0; i < upper.length; i++) {
    if (/[A-Z]/.test(upper[i])) {                                       // check if character is a letter
      numStr = numStr.concat(upper.charCodeAt(i) - 64).concat(' ');     // if so concat charCode minus 64 (brings to range of 1 - 26)
    }
  }
  
  return numStr.slice(0, -1);
}

////////////////////
// Best practice:
// Code by jdemion, Fantom1991, moniquedesalvo, ChungGor, Devel00per, Dhvani Kakadiya (plus 44 more warriors)

function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
}

/////////////////////////////////////////////////////////////////////////////////////////
// Unique In Order
/////////////////////////////////////////////////////////////////////////////////////////

var uniqueInOrder = function(iterable){
  var result = [iterable[0]];
  
  for (var i = 1; i < iterable.length; i++) {         // start at i = 1 to avoid a negative index for the if statement
    if (iterable[i - 1] !== iterable[i]) {            // if previous index != current index
      result.push(iterable[i]);                       // push current index to result
    }
  }
  return result.filter(Boolean);
}

/////////////////////////////////////////////////////////////////////////////////////////
// Equal Sides Of An Array
/////////////////////////////////////////////////////////////////////////////////////////

function findEvenIndex(arr) {

  for (var i = 0; i < arr.length; i++) {
    var sumLeft = 0;                                                           // variables to store sum of left/ right side of arr
    var sumRight = 0;
    
    sumLeft = arr.slice(0, i + 1).reduce(function(sum, value) {                // sum left side using reduce
    return sum + value;
    });
    
    sumRight = arr.slice(i, arr.length + 1).reduce(function(sum, value) {      // sum right side using reduce
    return sum + value;
    });
    
    if (sumLeft == sumRight) {return i};                                       // if sum left == sum right, return index
  }
  
  return -1;                                                                   // otherwise return -1
}

/////////////////////////////////////////////////////////////////////////////////////////
// Persistent Bugger.
/////////////////////////////////////////////////////////////////////////////////////////

function persistence(num) {
  if (num < 10) return 0;                                 // if a single digit, return 0
  
  var numStr = num.toString();                            // convert to string to allow iteration
  var total = 1;                                          // total starts at 1 as multiplication is involved
  var count = 0;                                          // counts the number of iterations
  
  while (numStr.length > 1) {
    for (var i = 0; i < numStr.length; i++) {
      total *= parseInt(numStr[i]);                       // total becomes each digit multiplied together (999 -> 9*9*9)
    }
    
    numStr = total.toString();                            // the total becomes the new number to multiply
    total = 1;                                            // reset total back to 1
    count += 1;                                           // add 1 to the count
  }
  
  return count;
}

/////////////////////////////////////////////////////////////////////////////////////////
// Tribonacci Sequence
/////////////////////////////////////////////////////////////////////////////////////////

function tribonacci(signature,n){
  if (n < 4) return signature.slice(0, n);
  var result = signature;
  
  for (var i = 3; i < n; i++) {
    result.push(result[i - 3] + result[i - 2] + result[i - 1]);
  }
  
  return result;
}

/////////////////////////////////////////////////////////////////////////////////////////
// Is a number prime?
/////////////////////////////////////////////////////////////////////////////////////////

function isPrime(num) {
  if (num < 2) return false;                    // negative numbers, 0 and 1 are not prime
  
  for (var i = 2; i < num; i++) {               // divide num by i values from 2 to 'num - 1'
    if (num % i == 0) {                         // all numbers can be divided by 1 or themselves so irrelevant
      return false;                             // if it can be divided with no remainder, it is not a prime
    }
  }
  
  return true;
}

////////////////////
// Best practice:
// Code by reggna, FunGuy, Mattordrag, sad, user3769065, Meow (plus 5 more warriors)

function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i == 0) return false;      // similar solution, but a clever way of writing the code
  return num >= 2; 
}

/////////////////////////////////////////////////////////////////////////////////////////
// Validate Credit Card Number
/////////////////////////////////////////////////////////////////////////////////////////

function validate(n){
  var cNumber = (n + '').split('').map(function(t){return parseInt(t)});
  
  if (cNumber.length % 2 == 0) {
    for (var i = 0; i < cNumber.length; i += 2) {
      cNumber[i] = cNumber[i] * 2;
      if (cNumber[i] > 9) {cNumber[i] = cNumber[i] - 9}
    }
  }
  
  else {
    for (var j = 1; j < cNumber.length; j += 2) {
      cNumber[j] = cNumber[j] * 2;
      if (cNumber[j] > 9) {cNumber[j] = cNumber[j] - 9}
    }
  }
  
  var total = cNumber.reduce(function(sum, value) {
    return sum + value;
  });
  
  return total % 10 == 0;
}

////////////////////
// Best practice:
// Code by tbaron, Shevsky, Motso, vorpixdigital, mvk0

function validate(n){
  var sum = 0;

  while (n > 0) {
    var a = n % 10;
    n = Math.floor(n / 10);
    
    var b = (n % 10) * 2;
    n = Math.floor(n / 10);
    
    if (b > 9) {
      b -= 9;
    }
    
    sum += a + b;
  }
  
  return sum % 10 == 0;
}

/////////////////////////////////////////////////////////////////////////////////////////
// Multiples of 3 and 5
/////////////////////////////////////////////////////////////////////////////////////////

function solution(number){
  var total = 0;
  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      total += i;
    }
  }
  return total;
}

/////////////////////////////////////////////////////////////////////////////////////////
// Grouped by commas
/////////////////////////////////////////////////////////////////////////////////////////

function groupByCommas(n) {
  var arr = n.toString().split('').reverse();
  for (var i = 0; i < arr.length; i += 4) {
      arr.splice(i, 0, ',');
  }
  return arr.reverse().slice(0, -1).join('');
}
