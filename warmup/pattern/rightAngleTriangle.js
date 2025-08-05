//      *
//     **
//    ***
//   ****
//  ***** 
function rightAngleTriangle(num){
    for(let i=0;i<num;i++){
        let row=" "
        for(let k=0;k<n-(i+1);k++){
            row=row+" "
        }
            for(let j=0;j<i+1;j++){
                row=row+"*"
            
        }
        console.log(row)
        
        
    }


}
rightAngleTriangle(5);