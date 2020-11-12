import React from 'react'
import './RightPage.scss'
import ShapeInput from '../ShapeInput/ShapeInput'
import ShapeButton from '../ShapeButton/ShapeButton'

const RightPage = ({
    handleChangeName,
    valueName,
    handleChangeX,
    valueX,
    handleChangeY,
    valueY,
    handleChangeWidth,
    valueWidth,
    handleChangeHeight,
    valueHeight,
    handleUserClick,
    onKeyDown
}) => {
    return (
        <div className="right-page">
            <h1>Detail</h1>
            <div className="user-control handle-input-name">
                <span>Name</span>
                <ShapeInput type="text" placeholder="Input name of Shape" handleChange={handleChangeName} value={valueName} />
            </div>
            <div className="user-control handle-input-X">
                <span>X</span>
                <ShapeInput type="text" 
                 placeholder={valueX} 
                 handleChange={handleChangeX} 
                 value={valueX} 
                 onKeyDown={onKeyDown}/>
            </div>
            <div className="user-control handle-input-Y">
                <span>Y</span>
                <ShapeInput type="text"  
                handleChange={handleChangeY} 
                value={valueY} 
                onKeyDown={onKeyDown}/>
            </div>
            <div className="user-control handle-input-width">
                <span>Width</span>
                <ShapeInput type="text" 
                 handleChange={handleChangeWidth} 
                 value={valueWidth}
                 onKeyDown={onKeyDown} />
            </div>
            <div className="user-control handle-input-height">
                <span>Height</span>
                <ShapeInput type="text"
                handleChange={handleChangeHeight}
                 value={valueHeight}
                 onKeyDown={onKeyDown} />
            </div>
            <ShapeButton label="Add"
             handleClick={handleUserClick}/>
        </div>
    )
}

export default RightPage
