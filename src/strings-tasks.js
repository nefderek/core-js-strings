
function getStringLength(value) {
  if (value == null || value == undefined || value < 1)   {
    return 0;   
  } else {
    return value.length;
  }
}
 

function isString(value) {
  if (typeof value === 'string'|| value instanceof String ){
    return true;
  } else {
    return fasle;
  }
}

function concatenateStrings(value1, value2) {
  return value1 + value2;
}

function getFirstChar(value) {
  if (value == '') {
    return '';
  } else {
  return value[0];
  }
}

function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

function removeLeadingWhitespaces(value) {
  return value.trimStart();
}

function removeTrailingWhitespaces(value) {
  return value.trimEnd();
}

function repeatString(str, times) {
  if (times < 0) {
    return '';
   } else {
     return str.repeat(times);
   }
}

function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

function sumOfCodes(str) {
 str = str.split('');
 let rez = 0 ;
  for (let i = 0; i < a.length; i ++){
    str[i] = str[i].charCodeAt(0);
    rez = rez + str[i];
  }
 return rez;
}

function startsWith(str, substr) {
  return str.startsWith(substr);
}

function endsWith(str, substr) {
  return str.endsWith(substr);
}

function reverseString(str) {
    str = str.split('').reverse().join('');
    return str;
  }

function orderAlphabetically(str) {
  str = str.split('').sort().join('');
  return str;
}

function containsSubstring(str, substring) {
  return str.includes(substring);
}

  function countVowels(str) {
    let count = 0;
  const arr = 'aeiouyAEIOUY';
  for (let i = 0; i < str.length; i++) {
    if (arr.includes(str[i])) {
      count ++;
    } 
  }
  return count;
  }

function isPalindrome(str) {
  str = str.toLowerCase();
    let str1 = str.split('').reverse().join('').replace(/[^\w\s]|_/g, "");
      str = str.toLowerCase().split(' ').join('').replace(/[^\w\s]|_/g, "");
        str1 = str1.split(' ').join('');
    if (str == str1) {
      return true;
    } else {
      return false;
}
}

function reverseWords(str) {
  str = str.split('').reverse().join('');
  str = str.split(' ').reverse().join(' ');
  return str;
}

function invertCase(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      newStr = newStr + str[i].toUpperCase();
    } else {
      newStr = newStr + str[i].toLowerCase();
    }
  }
  return newStr;
}

function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}



module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};

