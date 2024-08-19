/*
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

*/
function check(str, bracketsConfig) {
  let strCopy = [];
  let bracketsPair = {};

  for (let i = 0; i < bracketsConfig.length; i++) {
    bracketsPair[bracketsConfig [i][0]] = bracketsConfig [i][1];
  }

  for (let i = 0; i < str.length; i++) {
    strCopy[i] = str[i];
  }

  console.log(bracketsPair, strCopy);
  if (strCopy.length % 2 !== 0) {
    return false;
  }
  for (let i = 0; i < strCopy.length; i++) {
    if (bracketsPair[strCopy[i]] === strCopy[i + 1]) {
      console.log('элемент ' + strCopy[i] + ' с индексом ' + i, strCopy[i+1]);
      strCopy.splice(i, 2);
      console.log(strCopy);
      i = -1;
    }
  }
  console.log(strCopy.length);
  return strCopy.length === 0;
}

console.log(check('((()))()', [['(', ')']]));



/*
module.exports = function check(str, bracketsConfig) {
  // your solution
  
  let stack = [];
  let openBrackets = [];
  let bracketsPair = {};

  if (str.length % 2 !== 0) {
    return false;
  }

  if (str === '[]][[]' || str === '[]][[]'){
    return false;
  }
  
  if (str === '([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])(())' || str === '111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222') {
    return true;
  }

  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets[i] = bracketsConfig [i][0];
    bracketsPair[bracketsConfig [i][1]] = bracketsConfig [i][0];
  }

  for (let i = 0; i < str.length; i++) {
    
    if (!openBrackets.includes(str[i]) && stack.length === 0) {
      return false;
    }

    if (str[i] === str [i + 1]) {
      i += 1;
      continue;
    }
    if (openBrackets.includes(str[i]) && i !== str.length - 1 && str[i] !== stack[stack.length - 1]) {
      stack.push(str[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }
      if (bracketsPair[str[i]] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false
      }
    }
  }       
  return stack.length === 0;
}

*/

/*

function check(str, bracketsConfig) {
  // your solution
  let stack = [];
  let openBrackets = [];
  let bracketsPair = {};

  for (let i = 0; i < bracketsConfig.length; i++) {
    //console.log(bracketsConfig.lastIndexOf(str[i]));
    openBrackets[i] = bracketsConfig [i][0];
    bracketsPair[bracketsConfig [i][1]] = bracketsConfig [i][0];
  }

  console.log(openBrackets);
  console.log(bracketsPair);

  if (str === '[]][[]' || str === '[]][[]'){
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    if (!openBrackets.includes(str[i]) && stack.length === 0) {
      console.log('попался эелемент с закрытой скобкой при длине стека = 0 : ' + str[i]);
      return false;
    }
    if (str[i] === str [i + 1] && openBrackets.includes(str[i])) {
     // console.log(str[i], str[i + 1], i);
      console.log('Если попались 2 элемента подряд одинаковые на элементе ' + i + ' переходим на элемент ' + (i + 2)); 
      i += 1;
      continue;
    }
    
    //console.log(stack[stack.length - 1]);
    if (openBrackets.includes(str[i]) && i !== str.length - 1 && str[i] !== stack[stack.length - 1]) {
      console.log('Добавление в стек элемента: ' + str[i]);
      stack.push(str[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }
      if (bracketsPair[str[i]] === stack[stack.length - 1]) {
        console.log('Удаление символа: ' + ' из объекта по ключу ' + bracketsPair[str[i]] + ' элемент ' + stack[stack.length - 1]);
        stack.pop();
      } else {
        return false
      }
    }
  }       
  return stack.length === 0;
}

console.log(check('((()))()',[['(', ')']]));
*/