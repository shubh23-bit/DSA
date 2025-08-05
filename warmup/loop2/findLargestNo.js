// write a function that return largest number of array
function findLargest(arr){
    let store=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>store){
            store=arr[i]
        }
    }
    return store;

}
let arr=[2,3,10,5,7,9]
console.log(findLargest(arr));