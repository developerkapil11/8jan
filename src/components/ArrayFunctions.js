import React from 'react'

function ArrayFunctions() {
  const arr = [5,4,3,2,8];

  // **** Map function is used to mapping the each item of an array **** //

  // 1. we can use the arrow function inside the map which is called callBack function exp:-
  const newArr = arr.map((elem,index,arr)=>{
    return elem+10;
  })

  //console.log(newArr)

  //2. we can also pass the function inside the map exp:-

  function double (x) {
   return x*2;
  }

  const doubleArr = arr.map(double);

  // Map function returns the newArray
  // console.log(doubleArr)

  // **** Filter Function is used to filter the array like with some logic we can filter the array **** //

  const arr1 = [2,4,3,7,8,9,11,14,16];

  const evenVal = arr1.filter((item)=>{
    return item % 2 === 0;
  })

  const greterThan4 = arr1.filter((item, index, arr)=>{
    return item > 4;
  })

  // it is also return an array
  // console.log(greterThan4)

  // **** Reduce function is used to reduce an array in single element **** //
  // in this we need to pass the initial value. if we are not pass the initial value than it will take the first element of an array as initial value.

  const arr2 = [5,4,3,11,6,7];

  const addArr =  arr2.reduce((acc,cur)=>{
    // console.log(acc, cur)
      if (cur > acc){
        acc = cur;
      };
      return acc
  },0)
  // 10 is the initial value of reduce function
  // console.log(addArr)


  // Exaplesssssss //

  const users = [
    {firstName:"kapil",  lastName:"hans", age: 36},
    {firstName:"ketan",  lastName:"hans", age: 12},
    {firstName:"kavish",  lastName:"hans", age: 3},
    {firstName:"Yuvina",  lastName:"hans", age: 3},
    {firstName:"pari", lastName:"hans", age:12}
  ]

  // 1. List of full name of all this users

  const fullName = users.map((elem)=>{
      return { name:elem.firstName+' '+elem.lastName, age:elem.age }; 
  })

  //console.log(fullName)

  // 2. list fo same age of the users

  const sameAge = users.reduce((acc, curr)=>{
    //console.log(acc[curr.age]);
    if(acc[curr.age]){
      //console.log(acc[curr.age])
      acc[curr.age] = ++acc[curr.age]
    } else {
      acc[curr.age] = 1;
    }
    //console.log(acc);
    return acc;
  },{})

  //console.log(sameAge)

  // 3. find out all the firstname whos age is greater than 10

  const ageGreter10 = users.filter((val)=>val.age > 10).map((x)=> x.firstName);
  //console.log(ageGreter10)

  // 4. find out all the first name whos age is greater than 10 with reduce function
  const allusers = [
    {firstName:"kapil",  lastName:"hans", age: 36},
    {firstName:"ketan",  lastName:"hans", age: 12},
    {firstName:"kavish",  lastName:"hans", age: 3},
    {firstName:"Yuvina",  lastName:"hans", age: 3},
    {firstName:"pari", lastName:"hans", age:12}
  ]

  const ageLess10 = allusers.reduce((acc, current)=>{
    console.log(current.age < 10)
    if(current.age < 10){
        acc[current.firstName] = current.age;
    } 
    return acc;
  },{})

  const ageGreaterThan10 = allusers.reduce((acc, curr)=> {
    if(curr.age > 10){
        acc.push(curr.firstName);
    }
    return acc;
  },[])

  console.log(ageGreaterThan10)

  return (
    <h1>MAP, Filter and Reduce Function</h1>
  )
}

export default ArrayFunctions
