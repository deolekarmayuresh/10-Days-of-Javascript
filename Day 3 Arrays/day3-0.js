//code snippet

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let large_num = nums[0];
    let second_num;

    for(let i=0; i < nums.length; i++) {
        let current_val = nums[i];
        if(current_val > large_num){
            second_num = large_num;
            large_num = current_val;
        } else if(current_val < large_num && current_val > second_num) {
            second_num = current_val;
        }
    }

    return second_num;
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}