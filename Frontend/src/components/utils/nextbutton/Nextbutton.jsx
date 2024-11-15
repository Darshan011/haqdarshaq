import React from 'react'
import './Nextbutton.css'
const Nextbutton = ({value,onClick}) => {
  return (
    <div>
        <div className="container">
      <button className="nextbutton" type="button" onClick={onClick} >{value}</button>
        </div>
    </div>
  )
}

export default Nextbutton
