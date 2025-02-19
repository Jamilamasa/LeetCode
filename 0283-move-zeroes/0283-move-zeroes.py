class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        leftPointer = 0
        for rightPointer in range(len(nums)):
            if nums[rightPointer] != 0:
                nums[leftPointer], nums[rightPointer] = nums[rightPointer], nums[leftPointer]
                leftPointer += 1