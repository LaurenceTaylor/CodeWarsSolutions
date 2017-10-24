/////////////////////////////////////////////////////////////////////////////////////////
// Reverse words
/////////////////////////////////////////////////////////////////////////////////////////

function reverseWords(str) {
  var arr = str.split(' ');
  
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('').reverse().join('');
  }
  return arr.join(' ');
}

////////////////////
// Best practice:

function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}

/////////////////////////////////////////////////////////////////////////////////////////
// Replace With Alphabet Position
/////////////////////////////////////////////////////////////////////////////////////////

function alphabetPosition(text) {
  var upper = text.toUpperCase();
  var numStr = '';
  
  for (var i = 0; i < upper.length; i++) {
    if (/[A-Z]/.test(upper[i])) {
      numStr = numStr.concat(upper.charCodeAt(i) - 64).concat(' ');
    }
  }
  
  return numStr.slice(0, -1);
}

////////////////////
// Best practice:

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
