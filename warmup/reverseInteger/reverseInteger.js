// reverse the integer
function reverseInteger(n){
    
    let xCopy=Math.abs(n)
    let rev=0;

    while(xCopy>0){
        let rem=xCopy%10;
        rev=rev*10+rem;
        //console.log(rev)
        xCopy=Math.floor(xCopy/10) 
    }
    console.log(rev);

}
reverseInteger(11111)