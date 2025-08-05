// write a function that return a number of negative number:
function countNegativeno(arr,count){
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            count=count+1
        }
        
    }
    return count;
    
}
let count=0;
let arr=[1,4,5,-6,4,9,3,-4,6]
console.log(countNegativeno(arr, count));