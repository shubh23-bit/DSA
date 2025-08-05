//write function to find a smallest no of the array
function smallestNo(arr){
    let store =Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<store){
            store=arr[i]

        }
    }
    return store;

}
let arr=[44,5,99,77,1,45,9,2,89]
console.log(smallestNo(arr));