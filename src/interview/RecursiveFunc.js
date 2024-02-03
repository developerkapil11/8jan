import React from 'react'

function RecursiveFunc() {
    function colors(){
        let data = "I am Kapil"
        console.log(data)
    }

    function days(){
        colors();
    }
    function fruit(){
        days();
    }

    function topfunction(){
        fruit();
    }
    topfunction();
    return (
        <div></div>
    )
}

export default RecursiveFunc
