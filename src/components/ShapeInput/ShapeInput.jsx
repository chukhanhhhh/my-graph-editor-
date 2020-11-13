import React from 'react'
import "./ShapeInput.scss"

const ShapeControl = ({type, placeholder, handleChange, value, onKeyPress }) => {
    return (
        <input type={type}
                placeholder={placeholder}
                onChange = {handleChange}
                // required
                value={value}
                onKeyPress = {onKeyPress}
        />
    )
}

export default ShapeControl
