//reverse the string
//input=['h','e','l','l','o']
//output=['o','l','l','e','h']
let str=['s','h','u','b','h','a','m']
let str1=[]
let j=0
for(let i=str.length-1;i>=0;i--){
    str1[j]=str[i]
    j=j+1
  // str1.push(str[i])
    //console.log(str1[i])
    
}
console.log(str1,end=" ")
// //lets not get a extra dspace means extra arrya to store reverse string soo modify the exixting array and print
let arr=['h','e','l','l','o']
let len=arr.length
let hlflen=len/2
console.log(hlflen)
for(let i=0;i<=hlflen;i++){
  let temp=arr[i]
  arr[i]=arr[len-1-i]
  arr[len-1-i]=temp

}
console.log(arr)




















