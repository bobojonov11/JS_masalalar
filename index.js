//    1-masala

// function countVowels(str) {
//     let vowels = "aeiouAEIOU";
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.indexOf(str[i]) !== -1) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("Hello World")); 



//    2-masala

// function longestCommonPrefix(arr) {
//     if (!arr.length) return "";
//     let prefix = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         let j = 0;
//         while (j < prefix.length && j < arr[i].length && prefix[j] === arr[i][j]) {
//             j++;
//         }
//         prefix = prefix.substring(0, j);
//     }
//     return prefix;
// }
// console.log(longestCommonPrefix(["flower", "flow", "flight"])); 



//    3-masala

// function minPairSum(arr) {
//     if (arr.length === 0) return [null, null];
//     let min = arr[0];
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) min = arr[i];
//         if (arr[i] > max) max = arr[i];
//     }
//     return [min, max];
// }
// console.log(minPairSum([1, 60, -10, 70, -80, 85]));



//    4-masala

// function sumDigitsInString(str) {
//     let sum = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (!isNaN(str[i]) && str[i] !== ' ') {
//             sum += parseInt(str[i]);
//         }
//     }
//     return sum;
// }
// console.log(sumDigitsInString("a1b2c3")); 



//    5-masala

// function allPalindromeSubstrings(str) {
//     let result = [];
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i; j < str.length; j++) {
//             let substr = str.slice(i, j + 1);
//             if (isPalindrome(substr)) {
//                 result.push(substr);
//             }
//         }
//     }
//     return result;
// }

// function isPalindrome(s) {
//     let left = 0, right = s.length - 1;
//     while (left < right) {
//         if (s[left] !== s[right]) return false;
//         left++;
//         right--;
//     }
//     return true;
// }

// console.log(allPalindromeSubstrings("ababa"));



//    6-masala

// function findPairs(arr, k) {
//     let pairs = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === k) {
//                 pairs.push([i, j]);
//             }
//         }
//     }
//     return pairs;
// }
// console.log(findPairs([1, 2, 3, 4, 5], 5));



//    7-masala

// function findPalindromes(start, end) {
//     let result = [];
//     for (let i = start; i <= end; i++) {
//         let str = i.toString();
//         let isPal = true;
//         for (let j = 0; j < str.length / 2; j++) {
//             if (str[j] !== str[str.length - 1 - j]) {
//                 isPal = false;
//                 break;
//             }
//         }
//         if (isPal) result.push(i);
//     }
//     return result;
// }
// console.log(findPalindromes(100, 150));



//    8-masala

// function closestFibonacci(n) {
//     let a = 0, b = 1;
//     while (b < n) {
//         let temp = a + b;
//         a = b;
//         b = temp;
//     }
//     return [a, b];
// }
// console.log(closestFibonacci(10));



//    9-masala

// function minMaxDifference(arr) {
//     let min = arr[0], max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) min = arr[i];
//         if (arr[i] > max) max = arr[i];
//     }
//     return max - min;
// }
// console.log(minMaxDifference([3, 1, 4, 1, 5, 9]));



//    10-masala

// function spiralOrder(matrix) {
//     const res = [];
//     while (matrix.length) {
//         res.push(...matrix.shift());
//         matrix.forEach(row => res.push(row.pop()));
//         if (matrix.length) res.push(...(matrix.pop().reverse()));
//         for (let i = matrix.length - 1; i >= 0; i--) {
//             res.push(matrix[i].shift());
//         }
//     }
//     return res;
// }

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(spiralOrder(matrix));


