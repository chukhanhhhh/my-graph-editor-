import React from 'react'
// import styled from 'styled-components'
import ReactFlow from 'react-flow-renderer';
import './ViewGraphItems.scss'

const ViewGraphItems = ({idShape, nameShape, horizontalX, verticalY, widthShape, heightShape}) => {
    
    const data = [
        {
            id: `${idShape}`, 
            data:{label : <span>{nameShape}</span> },
            position: {
                horData : horizontalX,
                verData : verticalY,
            }
    
        },
    ]

    // console.log(data);
    return (
        <div className="view-graph-item">
            <ReactFlow
                elements={data}
                style = {{
                    width: `${widthShape}px`,
                    height: `${heightShape}px`
                }}
                snapToGrid={true}
                snapGrid={[15, 15]}
            >
            {/* <span>{nameShape}</span> */}
            </ReactFlow>    
        </div>
    )
}

export default ViewGraphItems
