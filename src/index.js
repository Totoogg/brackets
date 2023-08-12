module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let arrStr = str.split('');
  let flatBrackets = bracketsConfig.flat(Infinity);
  let arrSet = flatBrackets.filter((x, i) => i % 2 !== 0 && x !== flatBrackets[i - 1]);
  let startBrackets = flatBrackets.filter((x, i) => i % 2 === 0);
  let endBrackets = flatBrackets.filter((x, i) => i % 2 !== 0);
  let result = true;

  if (arrStr.length % 2 !== 0 || arrSet.includes(arrStr[0])) return false;

  arrStr.forEach((x, i) => {
    if (startBrackets.includes(x)) {
      if (endBrackets.includes(x) && stack.includes(x) && stack.at(-1) === x) {
        stack.pop();
      } else {
        stack.push(x);
      }
    } else {
      if (startBrackets.indexOf(stack.at(-1)) === endBrackets.indexOf(x)) {
        stack.pop();
      } else {
        result = false;
      }
    }
  });

  if (stack.length !== 0) {
    result = false;
  }

  return result;
}
