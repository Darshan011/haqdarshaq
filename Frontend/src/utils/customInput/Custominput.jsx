import React from 'react'
import './Custominput.css'
const Custominput = ({type,placeholder,value}) => {
  return (
    <div>
      <div className="container1">
        <input  className="custominput" type={type} placeholder={placeholder} value={value} />
      </div>
    </div>
  )
}

export default Custominput
