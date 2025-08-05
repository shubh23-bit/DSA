//nums1=[1,2,3,0,0,0]
//nums2=[2,3,4]
//time complexity of this code is olog(m+n)
let num1=[1,2,3,0,0,0]
let num2=[2,3,4]
let n=3
let m=3
let p1=0;//create two pointer to run the loop in num 1 for comparing
let p2=0;//create a 2nd pointer to run loop in num2
let num1copy=num1.slice(0,m);//i do it because we store a num1 in num1copy variable
for(let i=0;i<m+n;i++){
    if(p2>=m || p1<m && num1copy[p1]<num2[p2]){//check the condtion if any value is bigger we shift the value to copy array
        num1[i]=num1copy[p1]
        p1++
    }
    else{
        num1[i]=num2[p2]
        p2++

    }

}
console.log(num1)