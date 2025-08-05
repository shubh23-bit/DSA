//count the digit
function countDigit(n){
    if(n==0){
        console.log(1)//corer cases
    }
    n=Math.abs(n)//this will convrt negative to poitive
    let count=0
    while(n>0){
        n=Math.floor(n/10);
        count=count+1
    }
    console.log(count);

}
countDigit(259)
//Math.floor(10.1)//10 always floor the value 
//Math.floor(10.9)//10

//Math.round(10.1)//10 always cround the value
//Math.rount(10.6)//11

//Math.ciel(10.7)//11 always gve higher value
//Math.ciel(10.1)//11

//Math.abs(-298) 298 will do all negative number convert to positive