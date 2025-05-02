//    1-masala

// function logesPalindromicSubstring(s) {
//     let res = "";
//     for (let i = 0; i < s.length; i++) {
//         for (let j = 0; j < s.length; j++) {
//             let substr = s.slice(i, j + 1);
//             if (substr === [...substr].reverse().join("") && substr.length > res.length) {
//                 res = substr;
//             }
//         }
//     }
//     return res;
// }

// console.log(logesPalindromicSubstring("anajon"));



//    2-masala

// function protateArrey(arr, n) {
//     let sum = arr.splice(0, n);
//     arr.push(...sum);
//     return arr
// }

// console.log(protateArrey([1, 2, 3, 4, 5, 6, 7], 3));



//    3-masala

// function twoSum(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 return [i, j];
//             }
//         }

//     }
// }

// console.log(twoSum([2, 7, 11, 15], 9));



//    4-masala

// function arrSum(arr, target) {
//     function san(i, total) {
//         if (total === target) return true;
//         if (i >= arr.length) return false;
//         return san(i + 1, total + arr[i])
//     }
//     return san(0, 0);
// }

// console.log(arrSum([2, 4, 1], 7));
// console.log(arrSum([2, 4, 2], 7));



//    5-masala

// function arrDifect(arr1, arr2) {
//     const diff1 = arr1.filter(item => !arr2.includes(item));
//     const diff2 = arr2.filter(item => !arr1.includes(item));
//     return [...diff1, ...diff2]
// }

// console.log(arrDifect([2, 4, 1], [2, 3, 8]));



//    6-masala

// function mostFrequentEliment(arr) {
//     const freqMap = {};
//     let maxFreq = 0;
//     let mostFrequent;
//     for (let num of arr) {
//         freqMap[num] = (freqMap[num] || 0) + 1;
//         if (freqMap[num] > maxFreq) {
//             maxFreq = freqMap[num];
//             mostFrequent = num;
//         }
//     }
//     return mostFrequent;
// }

// console.log(mostFrequentEliment([1, 3, 1, 3, 2, 1]));



//    7-masala

// function incrementDigits(str) {
//       return str.replace(/\d/g, (digit) => {
//         return (parseInt(digit) + 1) % 10;
//       });
//     }

//     console.log(incrementDigits("abc123"));



//    8-masala

// function logestIncreasingSubarrey(arr) {
//   let maxLen = 1, curtLen = 1;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > arr[i - 1]) {
//       curtLen++
//       maxLen = Math.max(maxLen, curtLen);
//     } else {
//       curtLen = 1;
//     }
//   }
//   return maxLen;
// }

// console.log(logestIncreasingSubarrey([10, 20, 30, 10, 40, 50, 52, 55, 6]));



//    9-masala

// function countOccurrences(arr) {
//   const result = {};
//   for (let num of arr) {
//     result[num] = (result[num] || 0) + 1;
//   }
//   return result
// }

// console.log(countOccurrences([1, 2, 2, 3, 4, 4, 4, 5]));



//    10-masala

// function matrixSum(matrix) {
//   let sum = 0;
//   for (let row of matrix) {
//     for (let num of row) {
//       sum += num;
//     }
//   }
//   return sum;
// }

// console.log(matrixSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));


