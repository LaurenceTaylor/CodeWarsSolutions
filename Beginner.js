/////////////////////////////////////////////////////////////////////////////////////////
// Remove First and Last Character
/////////////////////////////////////////////////////////////////////////////////////////

function removeChar(str){
 return str.slice(1, -1);
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
// Code by Balkoth, mortonfox, anton-gorbikov, Saha, tombusby, Nyalab (plus 763 more warriors)

function even_or_odd(number) {
  return number % 2 == 0 ? "Odd" : "Even"   // Use a ternary operator in lieu of if/ else
}

/////////////////////////////////////////////////////////////////////////////////////////
// Remove the minimum
/////////////////////////////////////////////////////////////////////////////////////////

function removeSmallest(numbers) {
  var min = 0;                                 // place to store the index of the lowest number
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers[min]) {           // if current index is lower than min index, current i becomes new min
      min = i;
    }
  }
  delete numbers[min];                         // delete minimum
  return numbers.filter(Boolean);              // filter subsequent empty space
}

////////////////////
// Best practice:
// Code by crazyYuyang, ChungGor, mattfro333, Trodjo, marioepugh, pig858

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
    var string = str.toLowerCase();              // make string uniform lower case
    var countX = 0;                              // create variables to stor X/ O counts
    var countO = 0;
    for (i = 0; i < string.length; i++) {
      if (string[i] == 'x') {                    // if an x, add to x count
        countX += 1;
      }
      else if (string[i] == 'o') {
        countO += 1;                             // if an o, add to o count
      }
    }
    return countX == countO;                     // test is x and o counts are equal
}

////////////////////
// Best practice:
// Code by -Downfall, kirilloid, xsm2016, Brendenjones12, philipwerner, kickh (plus 2 more warriors)

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

/////////////////////////////////////////////////////////////////////////////////////////
// Vowel Count
/////////////////////////////////////////////////////////////////////////////////////////

function getCount(str) {
  var vowelsCount = 0;                                              // variable to count vowels
  for (i = 0; i < str.length; i++) {
    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' ||          // if statement checking for vowels
        str[i] == 'o' || str[i] == 'u') {
        vowelsCount += 1;                                           // if a vowel, count += 1
    }
  }
  return vowelsCount;
}

////////////////////
// Best practice:
// Code by Balkoth, dhensche, Azuaron, Raman_Kozar, Raman_Nerad, gazzaa (plus 34 more warriors)

 function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;   // use regex instead
}

/////////////////////////////////////////////////////////////////////////////////////////
// Don't give me five!
/////////////////////////////////////////////////////////////////////////////////////////

function dontGiveMeFive(start, end) {
  var fiveCount = 0;
  for (var i = start; i <= end; i++) {
    if (i.toString().indexOf('5') > -1) {
      fiveCount += 1;
    }
  }
  return end - start - fiveCount + 1;
}

/////////////////////////////////////////////////////////////////////////////////////////
// Complementary DNA
/////////////////////////////////////////////////////////////////////////////////////////

function DNAStrand(dna){
  var compDNA = '';
  for (var i = 0; i < dna.length; i++) {
    if (dna[i] == 'A') {compDNA = compDNA.concat('T')}
    if (dna[i] == 'T') {compDNA = compDNA.concat('A')}
    if (dna[i] == 'C') {compDNA = compDNA.concat('G')}
    if (dna[i] == 'G') {compDNA = compDNA.concat('C')}
  }
  return compDNA;
}

////////////////////
// Best practice:
// Code by ooflorent, saiful110816, Celia, canmeepo, spencer523, mexin (plus 19 more warriors)

function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

/////////////////////////////////////////////////////////////////////////////////////////
// Give me the k first digits. Odd digits.
/////////////////////////////////////////////////////////////////////////////////////////

function findOddDigits(n, k) {
  var odds = [];
  var str = n.toString();
  
  for (var i = 0; i < str.length; i++) {
    if (parseInt(str[i]) % 2 !== 0) {
      odds.push(str[i]);
    }
  }
  
  if (k > str.length || k > odds.length || odds.filter(Boolean).length == 0 || k <= 0) {
    return 0;
  }
  
  return parseInt(odds.slice(0, k).join(''));
}

/////////////////////////////////////////////////////////////////////////////////////////
// Beginner Series #3 Sum of Numbers
/////////////////////////////////////////////////////////////////////////////////////////

 function GetSum( a,b ) {
  var sum = 0;
  
  if (a == b) {
    return a;
  }
  
  if (a > b) {
    for (var i = b; i <= a; i++) {
      sum += i;
    }
  }
  
  if (b > a) {
    for (var j = a; j <= b; j++) {
      sum += j;
    }
  }
  
  return sum;
}

////////////////////
// Best practice:
// Code by ryanwaits, colbydauph, -Downfall, saiful110816, GitauHarrison, Alicemaina (plus 2 more warriors)

const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}
