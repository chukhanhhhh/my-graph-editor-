import React from 'react'
import rough from 'roughjs';

const ViewGraphItems = ({idShape, nameShape, horizontalX, verticalY, widthShape, heightShape}) => {
    // const rc = rough.ViewGraphItems(document.getElementById(idShape));
    return (
        <div className="view-graph-item" id={idShape}>
            hello
            {/* {
                rc.rectangle(horizontalX, verticalY, widthShape, heightShape, { fill: 'red' }) // x, y, width, height
            } */}
        </div>
    )
}

export default ViewGraphItems
