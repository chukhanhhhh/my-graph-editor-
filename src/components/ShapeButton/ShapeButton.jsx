import React from 'react'
import './ShapeButton.scss';
const ShapeButton = ({handleClick, label}) => {
    return (
        <button onClick={handleClick}>
            {label}
        </button>
    )
}

export default ShapeButton
