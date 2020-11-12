import React from 'react'
import './MiddlePage.scss';
import ViewGraphItems from '../../containers/ViewGraphItems/ViewGraphItems'
import './MiddlePage.scss'
const MiddlePage = ({
    destailGraph,
    nameGraph,
    xGraph,
    yGraph,
    withGraph,
    heightGraph,
    onUp,
    onDown,
    onLeft,
    onRight,
    onZoom,
    onUnZoom,

    }) => {
    // console.log(destailGraph)

    return (
        <div className="middle-page">
        {
            destailGraph.map((item) => {
                return(
                <ViewGraphItems 
                idShape= {item.id}
                nameShape={nameGraph}
                horizontalX = {xGraph}
                verticalY= {yGraph}
                widthShape = { withGraph}
                heightShape = {heightGraph} 
                onUp={onUp}
                onDown={onDown}
                onLeft={onLeft}
                onRight={onRight}
                onZoom={onZoom}
                onUnZoom={onUnZoom}
                />
            )}
            )
        
        } 
        </div>
    )
}

export default MiddlePage
