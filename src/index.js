module.exports = function check(str, bracketsConfig) {
  let strCopy = [];
  let bracketsPair = {};

  for (let i = 0; i < bracketsConfig.length; i++) {
    bracketsPair[bracketsConfig [i][0]] = bracketsConfig [i][1];
  }

  for (let i = 0; i < str.length; i++) {
    strCopy[i] = str[i];
  }

  if (strCopy.length % 2 !== 0) {
    return false;
  }
  for (let i = 0; i < strCopy.length; i++) {
    if (bracketsPair[strCopy[i]] === strCopy[i + 1]) {
      strCopy.splice(i, 2);
      i = -1;
    }
  }
  return strCopy.length === 0;
}

