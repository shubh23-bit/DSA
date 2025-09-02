// Max Consecutive Ones:
arr=[1,1,1,1,0,1,0,1,1]
//ouput =3
let currCount=0
let maxCount=0
for(let i=0;i<arr.length;i++){
    if(arr[i]==1){
        currCount=currCount+1
         
        
    }else{
        maxCount=currCount
        currCount=0
        
    }
}
console.log(maxCount)