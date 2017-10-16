/////////////////////////////////////////////////////////////////////////////////////////
// Remove First and Last Character
/////////////////////////////////////////////////////////////////////////////////////////

function removeChar(str){
 return str.slice(1, str.length - 1)   // N.B. this can just be str.slice(1, -1)
};

/////////////////////////////////////////////////////////////////////////////////////////
// Even or Odd
/////////////////////////////////////////////////////////////////////////////////////////

function even_or_odd(number) {
  if (number % 2 == 0) {
  return 'Even';
  }
  else return 'Odd';
}

////////////////////
// Best practice:

function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"   // ternary statement
}

/////////////////////////////////////////////////////////////////////////////////////////
// Remove the minimum
/////////////////////////////////////////////////////////////////////////////////////////

function removeSmallest(numbers) {
  var min = 0;
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers[min]) {
      min = i;
    }
  }
  delete numbers[min];
  return numbers.filter(Boolean);
}

////////////////////
// Best practice:

function removeSmallest(numbers) {
  if(!numbers)return [];
  var min=Math.min.apply(null,numbers);
  numbers.splice(numbers.indexOf(min),1);
  return numbers;
}

/////////////////////////////////////////////////////////////////////////////////////////
// Exes and Ohs
/////////////////////////////////////////////////////////////////////////////////////////

/* Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. The string can contains any char. */

function XO(str) {
    var string = str.toLowerCase();
    var countX = 0;
    var countO = 0;
    for (i = 0; i < string.length; i++) {
      if (string[i] == 'x') {
        countX += 1;
      }
      else if (string[i] == 'o') {
        countO += 1;
      }
    }
    return countX == countO;
}

////////////////////
// Best practice:

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

/////////////////////////////////////////////////////////////////////////////////////////
// Vowel Count
/////////////////////////////////////////////////////////////////////////////////////////

function getCount(str) {
  var vowelsCount = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' ||
        str[i] == 'o' || str[i] == 'u') {
        vowelsCount += 1;
    }
  }
  return vowelsCount;
}

////////////////////
// Best practice:

 function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
