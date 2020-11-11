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
    handleUserClick
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
                <ShapeInput type="number"  handleChange={handleChangeX} value={valueX} />
            </div>
            <div className="user-control handle-input-Y">
                <span>Y</span>
                <ShapeInput type="number"  handleChange={handleChangeY} value={valueY} />
            </div>
            <div className="user-control handle-input-width">
                <span>Width</span>
                <ShapeInput type="number"  handleChange={handleChangeWidth} value={valueWidth} />
            </div>
            <div className="user-control handle-input-height">
                <span>Height</span>
                <ShapeInput type="number"  handleChange={handleChangeHeight} value={valueHeight} />
            </div>
            <ShapeButton label="Add" handleClick={handleUserClick}/>
        </div>
    )
}

export default RightPage
