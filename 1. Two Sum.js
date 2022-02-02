/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    let i, j;
    const numsLenght = nums.length;

    for (i = 0; i < numsLenght; i++) {

        for (j = (i + 1); j < numsLenght; j++) {

            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

};