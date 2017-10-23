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
