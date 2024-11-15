import React from 'react'
import './screenTilte.css'
const ScreenTilte = ({ children ,value}) => {
  return (
    <div className="title">
      <p>{value}</p>
      { children }
    </div>
  )
}

export default ScreenTilte
