import React from 'react'
import './LeftPage.scss'
import CountItem from '../../containers/CountGraphItems//CountItem'

const LeftPage = ({countGraph, onDelete}) => {
    return (
        <div className="left-page">
        {
            countGraph.map((counter)=>{
                return(
                    <CountItem 
                    idShape= {counter.id}
                    nameShape={counter.Title}
                    widthShape = {counter.Width}
                    heightShape = {counter.Height} 
                    onDelete = {onDelete}
                    />
                )
            })
        }
        </div>
    )
}

export default LeftPage
