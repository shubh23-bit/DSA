// *
// **
// ***
// ****

function anglePatter(num){
    for(let i=0;i<num;i++){
        let row=" ";
        for(let j=0;j<=i;j++){
            row=row+'*'
        }
        console.log(row);
    }

}
anglePatter(4)
