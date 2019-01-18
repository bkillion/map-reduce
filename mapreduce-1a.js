let myNums = [1, 2, 3];

function multiplyByThree(nums) {
    let i,
        result = [];

    for (i=0; i<nums.length; i++) {
        result.push(nums[i] * 3);
    }

    return result;
}

console.log("Before ", myNums);

let threes = multiplyByThree(myNums);

console.log("After ", myNums);
console.log("After ", threes);