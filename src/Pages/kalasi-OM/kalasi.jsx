import React, { useState } from 'react'

function kalasi() {
    const[name,setName]=useState("kalasi")

    
        function Name(){
            setName("marabage")
        }
  return (
    <div>
        <button className='btn btn-primary'onClick={Name}>done</button>

        <h1>
            {name}
        </h1>

    </div>
  )
}

export default kalasi