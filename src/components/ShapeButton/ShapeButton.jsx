import React from 'react'

const ShapeButton = ({handleClick, label}) => {
    return (
        <button onClick={handleClick}>
            {label}
        </button>
    )
}

export default ShapeButton
