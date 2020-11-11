import React from 'react'
import './MiddlePage.scss';
import ViewGraphItems from '../../containers/ViewGraphItems/ViewGraphItems'

const MiddlePage = ({DestailGraph}) => {
    // console.log(viewGraph)
    return (
        <div className="middle-page">
        {
           Object.keys(DestailGraph).map((item) => {
                    <ViewGraphItems 
                    idShape= {item.id}
                    nameShape={item.name}
                    horizontalX = {item.X}
                    verticalY= {item.Y}
                    widthShape = {item.width}
                    heightShape = {item.height} 
                    />
               }
           )
        };
        </div>
    )
}

export default MiddlePage
