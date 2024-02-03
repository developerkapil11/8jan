import React from 'react'

function TestMyself() {

    //  1. What is the output

    var x = 1;
    function foo(){
        x = 10;
        return;
        function x(){
            
        }
    }

    foo();
    //console.log(x) // output = 1

    //  **************************************************************************************************  //

    //  2. What is the output

    var name = "Kapil Hans";
    (function(){
        //console.log(name);
        var name = "Kavish Hans";
    })();

    //  **************************************************************************************************  //

    // 3. what is the Output

    var x = 1;
    if(function test(){}){
        x += typeof test;
    }

    //console.log(x)

    //  **************************************************************************************************  //

    // 4. what is the Output

    function Parent() {}
    function Child() {}

    Child.prototype = new Parent();
    var obj = new Child();

    //console.log(obj instanceof Parent);
    






    return (
        <div></div>
    )
}

export default TestMyself
