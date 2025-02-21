/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let leftPointer = 0;
    for (let rightPointer = 0; rightPointer < nums.length; rightPointer++) {
        if (nums[rightPointer] !== 0) {
            [nums[leftPointer], nums[rightPointer]] = [nums[rightPointer], nums[leftPointer]]
            leftPointer += 1
        }
    }
};