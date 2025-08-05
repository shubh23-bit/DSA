// remove duplicate from sorted array
arr=[0,0,1,1,2,3,3,4,4,5,5,6,6,7]
//arr=[0,1,2,3,4,5,6,7]
let x=0//
for(let i=1;i<arr.length;i++){
    if(arr[i]>arr[x]){
        x=x+1
    }
    arr[x]=arr[i]


}
console.log(x+1)
