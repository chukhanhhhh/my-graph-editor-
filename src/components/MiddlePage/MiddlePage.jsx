import React from 'react'
import './MiddlePage.scss';
import ViewGraphItems from '../../containers/ViewGraphItems/ViewGraphItems'
import './MiddlePage.scss'
const MiddlePage = ({
    destailGraph,
    onUp,
    onDown,
    onLeft,
    onRight,
    onIncrementWidth,
    onDecrementWidth,
    onIncrementHeight,
    onDecrementHeight,
    }) => {
        
    console.log(destailGraph)

    return (
        <div className="middle-page">
        {
            destailGraph.map((item) => (
                    <ViewGraphItems 
                    item = {item}
                    idShape= {item.id}
                    nameShape={item.Title}
                    horizontalX = {item.X}
                    verticalY= {item.Y}
                    widthShape = {item.Width}
                    heightShape = {item.Height} 
                    onUp={onUp}
                    onDown={onDown}
                    onLeft={onLeft}
                    onRight={onRight}
                    onIncrementWidth={onIncrementWidth}
                    onDecrementWidth={onDecrementWidth}
                    onIncrementHeight={onIncrementHeight}
                    onDecrementHeight={onDecrementHeight}
                    />
            ))
        } 
        </div>
    )
}

export default MiddlePage
