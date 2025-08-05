// 1
// 01
// 010
// 1010
// 10101
function Toggle(n){
     let toggle=1
    for(let i=0;i<n;i++){
        let row=' '
       
    for(let j=0;j<i+1;j++){
        row=row+toggle
        if(toggle==1){
            toggle=0;
          
        }else{
            toggle=1
        }

    }
    }


}
Toggle(5);