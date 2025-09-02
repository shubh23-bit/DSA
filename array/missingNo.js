//Find the missing number in array
var arr=[0,2,1,8,7,9,3,4,5]
var n=arr.length
var totalSum=n*(n+1)/2
//console.log(totalSum)

var partialSum=0
for(var i=0;i<n;i++){
    partialSum=partialSum+arr[i]
}
//console.log(partialSum)
var missingNo=totalSum-partialSum
console.log(missingNo)