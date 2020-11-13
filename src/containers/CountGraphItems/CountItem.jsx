import React from 'react'

const CountItem = ({
    idShape, 
    nameShape, 
    widthShape, 
    heightShape,
    onDelete
}) => {
    return (
        <ol className="counter-item" id={idShape}>
             <li>
                <h1>{nameShape}</h1>
                <span>width: {widthShape} px </span>
                <span>height: {heightShape} px</span>
                <button onClick={onDelete}>Delete</button>
            </li>
            <hr/>
        </ol>
    )
}

export default CountItem
