// 1
// 22
// 333
// 4444
// 55555
function numberAngle1(num){
    for(let i=0;i<num;i++){
        let row=" "
        for(let j=0;j<i+1;j++){
            row=row+(i+1)
        }
        console.log(row)

    }
}
numberAngle1(5)