//write function that find a element of array then return a index if number npt present then return -1
function searchElement(arr,element){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==element){
            return i
        }
        
    }
    return -1
    

}
let arr=[2,4,3,5,7,8,9]
let element=5;
console.log(searchElement(arr, 5));