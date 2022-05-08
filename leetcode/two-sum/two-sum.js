/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumArr = function (nums, target) {
  const result = [];
  nums.forEach((num, i) => {
    for (let j = i + 1; j < nums.length; j++) {
      if (num + nums[j] === target) {
        result.push(i, j);
        break;
      }
    }
  });
  return result;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumReduce = (nums, target) =>
  nums.reduce((tuple, next, index) => {
    const arr1 = nums.slice(index + 1);
    const targetIndex = arr1.findIndex((value) => next + value === target);

    if (targetIndex > -1) {
      tuple = [index, targetIndex + index + 1];
    }
    return tuple;
  }, []);
