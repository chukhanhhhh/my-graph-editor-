import React from 'react'
import "./ShapeInput.scss"

const ShapeControl = ({type, placeholder, handleChange, value}) => {
    return (
        <input type={type}
                placeholder={placeholder}
                onChange = {handleChange}
                required
                value={value}
        />
    )
}

export default ShapeControl
