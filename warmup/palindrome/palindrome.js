//palindrome:121 <=>121
function palindrome(n){
    let nCopy=n;
    let rev=0
    while(n>0){
        let rem=n%10
        rev=rev*10+rem
        n=Math.floor(n/10)

    }
    if(nCopy==rev){
        console.log(`n is ${nCopy}:palindrome `)
    }
    else{
        console.log("not palindrome")
    }

}
palindrome(123)
