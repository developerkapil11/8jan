import React from 'react'

function CallbackCloserAnomenousFunc() {

    // **** Anonymous Function **** //

    // Anonymous Functions are those functions which is define without name. we can define it without name, we can pass this as an argument and we can use as IIFE (immidiately invoked function epressions)

    // Anonymous function using a function expression

    // example 1
    // function addNumbers (a,b){
    //     return a+b;
    // }

    // example 2
    // const addNumbers = function (x,y){
    //     return x*y;
    // }

    //example 3
    // const addNumbers = (c,d) => d-c; 

    // Anonymous function as an argument

    setTimeout(function(){
        //console.log('hi I am Kapil Hans')
    }, 5000);

    // IIFE

    (function(){
        //console.log('this is IIFE Function');
    })()


     // **** Function Statement **** creating a simple function is called function statement //

     function a(){
        //console.log('a is called');
     }

     // **** Function Expression **** a function assigned to a variable is called, it is not support the hoisting //

     const add = function (a,b) {
        return a+b;
     }
     add(10,20);

     // **** Function Declaration **** a function define with name is called, it support hoisting//

     //console.log(mul(55,66));
     function mul(x,y){
        return x*y;
     }

     // **** Anonymous Function **** //

    //  const func = () => console.log('Anonymous Function');
    //  func();

     // **** Named Function Expression **** we can give the name of the function with anomynous function //

     let abc = function xyz(){
        console.log(xyz)
     }

     abc()

     // **** Difference Between Parameters and Arguments **** to pass the value to the function is called arguments and to get the values inside the function is called parameters//

     function params(x,y){ // these are parameters
        return x*y;
     }

     params(5,7) // these are arguments


     // **** First Class Function **** a function is pass as an argument and get from parameter is called FC function //

     const newVal = function(getVal){
        return getVal;
     }

     const val = () => {
        return 'hello'
     }

     console.log(newVal(val()))


     // **** Arrow Function **** a small expression of function is called Arrow function //

     const arrowFunc = () => 'Hi this is Arrow Function'

     //console.log(arrowFunc());


     // **** CallBack Functions **** //

     // callback function is the function which is pass as argument in other function. Java script is an synchronous and single threded language but with the help of callback function we can make it as multithreded and asyncronous language. For example:-

     setTimeout(function(){
        
     }, 1000);

     // in setTimeout we are passing the function as argument which means its a callback function
     
     
     // **** HOF (Higher Order Function) **** //

    //HOF are the functions which takes functions as an Arguments or returns a function. For Example map, filter, reduce function 
     
     
    // **** Syncronous Callback and Asyncronous Callback **** //

    // most callback built in functions are known as syncronous callback because they call immidiatly
    // but the callback functions which execution is depend on the other or they will be executed when we want is called Asyncronous Callback 


    return (
        <div>
            <h1></h1>
        </div>
    )
}

export default CallbackCloserAnomenousFunc
