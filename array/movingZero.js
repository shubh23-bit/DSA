//Move zero in place-x should contain the pos where we need have to shift non zero element
//brute force approch-create anew array and fill number 
arr=[0,1,0,3,12]
let x=0
for(let i=0;i<arr.length;i++){
    if (arr[i]!==0){
        arr[x]=arr[i];
        x++;

    }


}
//fill all the remaining element to zero
for(let i=x;i<arr.length;i++){
    arr[i]=0
}
console.log(arr);