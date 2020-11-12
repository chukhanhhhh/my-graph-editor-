import React from 'react'
import "./ShapeInput.scss"

const ShapeControl = ({type, placeholder, handleChange, value, onKeyDown }) => {
    return (
        <input type={type}
                placeholder={placeholder}
                onChange = {handleChange}
                required
                value={value}
                onKeyDown = {onKeyDown}
        />
    )
}

export default ShapeControl
