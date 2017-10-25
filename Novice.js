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

var uniqueInOrder=function(iterable){
  var result = [iterable[0]];
  
  for (var i = 1; i < iterable.length; i++) {
    if (iterable[i - 1] !== iterable[i]) {
      arr.push(iterable[i]);
    }
  }
  return result.filter(Boolean);
}

/////////////////////////////////////////////////////////////////////////////////////////
// Equal Sides Of An Array
/////////////////////////////////////////////////////////////////////////////////////////

function findEvenIndex(arr) {

  for (var i = 0; i < arr.length; i++) {
    var sumLeft = 0;
    var sumRight = 0;
    
    sumLeft = arr.slice(0, i + 1).reduce(function(sum, value) {
    return sum + value;
    });
    
    sumRight = arr.slice(i, arr.length + 1).reduce(function(sum, value) {
    return sum + value;
    });
    
    if (sumLeft == sumRight) {return i};
  }
  
  return -1;
}

/////////////////////////////////////////////////////////////////////////////////////////
// Persistent Bugger.
/////////////////////////////////////////////////////////////////////////////////////////

function persistence(num) {
  if (num < 10) return 0;
  
  var numStr = num.toString();
  var total = 1;
  var count = 0;
  
  while (numStr.length > 1) {
    for (var i = 0; i < numStr.length; i++) {
      total *= parseInt(numStr[i]);
    }
    
    numStr = total.toString();
    total = 1;
    count += 1;
  }
  
  return count;
}
