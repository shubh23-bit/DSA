//Remove element:
//Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
// The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
//Input: nums = [0,1,2,2,3,0,4,2], val = 2
//output: 5, nums = [0,1,3,_,_]

let arr=[0,1,2,2,3,0,4,2]
let val=2
let x=0
// for(let i=0;i<arr.length;i++){
//     if (arr[i]!==val){
//         arr[x]=arr[i]
//     x=x+1
//     }

// }
// console.log(x)
// console.log(arr)
/////////////////////////////////////////
for(let i=0;i<arr.length;i++){
    if(arr[i]==val){
        continue
    }
    x=x+1

}
console.log(x)