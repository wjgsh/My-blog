/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//   const newNums = [];
//   newNums.push(nums[0]);
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i - 1] < nums[i]) {
//       newNums.push(nums[i]);
//     }
//   }
//   return newNums;
// };

var removeDuplicates = function(nums) {
  if (nums.length < 2) return nums.length;
  let temp = nums[0];
  let gap = 0;
  for (let i = 1; i < nums.length; i++) {
    if (temp === nums[i]) {
      gap += 1;
    } else {
      temp = nums[i];
      nums[i - gap] = nums[i];
    }
  }
  return nums.length - gap;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const newNums = removeDuplicates(nums);
console.log(newNums);
