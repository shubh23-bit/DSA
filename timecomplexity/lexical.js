function a(){
    s=10
    c()
    function c(){
        s=5
        console.log(s)
        s=25
        
    }

}
s=20
a()
////////////////////////////////////////////////////////////////////////////////////////////////////
function outerFunction() {
  let outerVar = "I am from outerFunction";

  function innerFunction() {
    let innerVar = "I am from innerFunction";

    console.log(innerVar);     // ✅ Found in current lexical environment
    console.log(outerVar);     // ✅ Not found in current, found in outer lexical environment
  }

  innerFunction();
}

outerFunction();