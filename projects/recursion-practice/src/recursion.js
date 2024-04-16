// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  // Base case: if n is 0, the factorial is 1
  if (n === 0) {
    return 1;
  }
  // Recursive case: n! = n * (n-1)!
  else if (n > 0) {
    return n * factorial(n - 1);
  }
  // If n is negative, return undefined as factorial is not defined for negative numbers
  else {
    return null;
  }
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  // Base case: If the array is empty, return 0
  if (array.length === 0) {
    return 0;
  }
  // Recursive step: Return the first element plus the sum of the rest of the array
  else {
    return array[0] + sum(array.slice(1));
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
  // Handle negative numbers by converting them to positive
  n = Math.abs(n);
  
  if (n === 0) {
    return true; // Base case: 0 is even
  } else if (n === 1) {
    return false; // Base case: 1 is odd
  } else {
    return isEven(n - 2); // Recursive step
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // Base case: when n is 0, the sum below 0 is 0
  if (n === 0) {
    return 0;
  }
  // If n is negative, we increment towards 0 and add those values
  else if (n < 0) {
    return (n + 1) + sumBelow(n + 1);
  }
  // If n is positive, we decrement towards 0 and add those values
  else {
    return (n - 1) + sumBelow(n - 1);
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  // Base case: if x is equal to y or they are consecutive, return an empty array
  if (x === y || x === y - 1 || x === y + 1) {
    return [];
  } else if (x < y) { // If starting integer is less than ending integer
    return [x + 1].concat(range(x + 1, y));
  } else { // If starting integer is greater than ending integer
    return [x - 1].concat(range(x - 1, y));
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // Base case: any number to the power of 0 is 1
  if (exp === 0) {
    return 1;
  }
  // Recursive case for positive exponents
  else if (exp > 0) {
    return base * exponent(base, exp - 1);
  }
  // Recursive case for negative exponents
  else {
    return 1 / (base * exponent(base, (-exp) - 1));
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // Base case: 1 is a power of 2 (2^0)
  if (n === 1) {
    return true;
  }
  // Base case: n less than 1 or not an integer is not a power of 2
  else if (n < 1 || n % 2 !== 0) {
    return false;
  }
  // Recursive case: divide n by 2 and check again
  return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  // Base case: if the string is empty or has a length of 1
  if (string.length <= 1) {
    return string;
  }
  // Recursive step: take the first character, move it to the end, and call reverse on the rest of the string
  return reverse(string.substring(1)) + string[0];
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // Optional: Normalize the string (remove non-alphanumeric characters and convert to the same case)
  string = string.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Base case: If the string is empty or has a single character, it's a palindrome
  if (string.length <= 1) {
    return true;
  }

  // Check if the first and last characters are the same
  if (string[0] === string[string.length - 1]) {
    // Call the function recursively with the string excluding the first and last characters
    return palindrome(string.slice(1, -1));
  } else {
    // If the first and last characters do not match, it's not a palindrome
    return false;
  }
  
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y) {
 
  if (y === 0) {
    return 0;
  }
 
  else if (y < 0) {
    return - multiply(x, -y);
  }
 
  else {
    return x + multiply(x, y - 1);
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  // Base case: if both strings are empty, they are identical
  if (str1 === '' && str2 === '') {
    return true;
  }
  // Base case: if the first characters of both strings are the same,
  // proceed to check the rest of the strings
  if (str1.charAt(0) === str2.charAt(0)) {
    return compareStr(str1.slice(1), str2.slice(1));
  }
  // If the first characters are not the same, or one string is empty
  // (meaning the strings are of different lengths), return false
  return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  // Base case: If the string is empty, return an empty array
  if (str.length === 0) {
    return [];
  } else {
    // Recursive step: Take the first character and concatenate it with the result of createArray called on the rest of the string
    return [str[0]].concat(createArray(str.slice(1)));
  }
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  // Base case: If the array is empty, return an empty array.
  if (array.length === 0) {
    return [];
  }
  // Recursive case: Take the first element and concatenate it after the reversed rest of the array.
  return reverseArr(array.slice(1)).concat(array[0]);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  // Base case: If length is 0, return an empty array
  if (length === 0) {
    return [];
  } else {
    // Recursive step: Reduce the length by 1 and add the value to the array
    return [value].concat(buildList(value, length - 1));
  }
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  // Base case: If the array is empty, return 0
  if (array.length === 0) {
    return 0;
  }
  // Check the first element and add 1 if it matches the value, otherwise add 0
  // Then, recursively call countOccurrence for the rest of the array
  return (array[0] === value ? 1 : 0) + countOccurrence(array.slice(1), value);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, index=0, result=[]) {
  // Base case: If the index is equal to the array length, return the result array
  if (index === array.length) {
    return result;
  }
  // Recursive case: Apply the callback to the current element, add it to the result array,
  // and call rMap with the next index
  result.push(callback(array[index]));
  return rMap(array, callback, index + 1, result);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  // Return null for negative integers
  if (n < 0) {
    return null;
  }
  // Base case: The first number in Fibonacci sequence is 0
  if (n === 0) {
    return 0;
  }
  // Base case: The second and third numbers in Fibonacci sequence are 1
  else if (n === 1 || n === 2) {
    return 1;
  }
  // Recursive step: Sum of the two preceding numbers
  else {
    return nthFibo(n - 1) + nthFibo(n - 2);
  }
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  // Base case: if the array is empty, return an empty array
  if (input.length === 0) {
    return [];
  }
  // Recursive case: capitalize the first word and concatenate it with the result of the recursive call
  return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  // Base case: if the array is empty, return an empty array
  if (array.length === 0) {
    return [];
  }
  
  // Take the first string and capitalize its first letter
  const firstString = array[0];
  const capitalizedString = firstString.charAt(0).toUpperCase() + firstString.slice(1);
  
  // Recursively call capitalizeFirst with the rest of the array
  // and concatenate the capitalized string with the result
  return [capitalizedString].concat(capitalizeFirst(array.slice(1)));
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj={}) {
  // Base case: if the string is empty, return the object
  if (str.length === 0) {
    return obj;
  }

  // Recursive case
  const char = str[0]; // Get the first character of the string
  if (obj[char]) {
    obj[char] += 1; // Increment the count if the character is already in the object
  } else {
    obj[char] = 1; // Add the character to the object with a count of 1
  }

  // Recursively call the function with the rest of the string and the updated object
  return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  // Base case: If the list is empty or has only one element, return it as is.
  if (list.length <= 1) {
    return list;
  }

  // Recursive step: Compare the first element with the next one.
  var head = list[0];
  var next = list[1];

  // If the first element is the same as the next, skip the first element and recurse on the rest of the list.
  if (head === next) {
    return compress(list.slice(1));
  } else {
    // If the first element is different from the next, include it in the result and recurse on the rest of the list.
    return [head].concat(compress(list.slice(1)));
  }
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, index=0) {
  // Base case: If we've reached the end of the array, return an empty array.
  if (index >= array.length) {
    return [];
  }
  
  // Recursive step:
  // If the current element is 0 and the same as the next element, skip it.
  if (array[index] === 0 && array[index] === array[index + 1]) {
    return minimizeZeroes(array, index + 1);
  } else {
    // Include the current element and proceed with the rest of the array.
    return [array[index]].concat(minimizeZeroes(array, index + 1));
  }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, index=0) {
  // Base case: If the array length is equal to the index, return the array
  if (index === array.length) {
    return array;
  }

  // If the index is even or 0, make the number at the current index positive
  if (index % 2 === 0) {
    array[index] = Math.abs(array[index]);
  } else {
    // If the index is odd, make the number at the current index negative
    array[index] = -Math.abs(array[index]);
  }

  // Recursive call for the next element in the array
  return alternateSign(array, index + 1);
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  // Base case: If the string is empty, return an empty string
  if (str.length === 0) {
    return "";
  }

  // Mapping of digits to their word equivalents
  const numWords = {
    '0': 'zero', '1': 'one', '2': 'two', '3': 'three',
    '4': 'four', '5': 'five', '6': 'six', '7': 'seven',
    '8': 'eight', '9': 'nine'
  };

  // Check if the first character is a digit and needs to be converted
  const firstChar = str[0];
  const restOfString = str.slice(1);

  if (numWords[firstChar]) {
    // If the first character is a digit, replace it with its word equivalent
    // and make a recursive call for the rest of the string
    return numWords[firstChar] + numToText(restOfString);
  } else {
    // If the first character is not a digit, keep it as is
    // and make a recursive call for the rest of the string
    return firstChar + numToText(restOfString);
  }
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
  // If node is not provided, start with the document's body
  if (!node) {
    node = document.body;
  }

  // Initialize count to 0
  let count = 0;

  // Check if the current node matches the tag we're looking for
  if (node.tagName && node.tagName.toLowerCase() === tag.toLowerCase()) {
    count = 1; // Found a match, increment count
  }

  // Recursively check all child nodes
  node.childNodes.forEach(function(child) {
    count += tagCount(tag, child); // Add the count from child nodes
  });

  return count;
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
  // Base case: if the range is invalid, the target is not in the array
  if (min > max) {
    return -1; // Target not found
  }

  // Find the midpoint of the current range
  let mid = Math.floor((min + max) / 2);

  // Check if the midpoint is the target
  if (array[mid] === target) {
    return mid; // Target found
  } else if (array[mid] < target) {
    // If the target is greater than the midpoint, search the right half
    return binarySearch(array, target, mid + 1, max);
  } else {
    // If the target is less than the midpoint, search the left half
    return binarySearch(array, target, min, mid - 1);
  }
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
  // Base case: if the array has 1 or 0 elements, it's already sorted.
  if (array.length <= 1) {
    return array;
  }

  // Divide the array into two halves.
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Recursively sort both halves.
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the sorted halves.
  return merge(sortedLeft, sortedRight);
};

// Helper function to merge two sorted arrays.
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // While there are elements in both arrays, push the smaller element to the result.
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // If there are remaining elements in either left or right, add them to the result.
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
