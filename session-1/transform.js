
// Homework #1

function transform(nums) {
    let squaredNums = nums.map(number => number*number);
    //The sort() sorts the elements of an array.
        //array.sort(compareFunction)
            //When sort() compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
    let sortedNums = squaredNums.sort((a, b) => a - b);

    return sortedNums;
}

const nums = [4,9,5,3,8]; //45389 43589 34589
const sortedSquaredNums = transform(nums);
console.log(sortedSquaredNums)