// 1
// 12
// 123
// 1234
function numberAngle(num) {
    for (let i = 0; i <num; i++) {
        let row = " ";
        for (let j = 0; j <i+1; j++) {
            row = row + (j+1)
        }
        console.log(row)
    }

}
numberAngle(4)