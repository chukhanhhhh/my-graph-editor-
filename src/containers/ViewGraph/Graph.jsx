import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actionTypes from "../../store/action"
import LeftPaget from '../../components/LeftPage/LeftPage'
import MiddlePage from '../../components/MiddlePage/MiddlePage'
import RightPage from '../../components/RightPage/RightPage'
import "./Graph.scss"

const Graph = () => {
    const viewGraph = useSelector(state => state.view.graph);
    // const copyStore = Object.assign({}, viewGraph);
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    
    const handleUserClicked = {

        handleUserDispatch : {
            onAddShape : () => dispatch({
                type: actionTypes.active.ADD, 
                name: name, 
                X: parseInt(X), 
                Y: parseInt(Y), 
                width: parseInt(width), 
                height: parseInt(height),
            }),
        },


        handleUserChange: {
            onChangeName: (e) => setName(e.target.value),
            onChangeX: (e) => setX(e.target.value),
            onChangeY: (e) => setY(e.target.value),
            onChangeWidth: (e) => setWidth(e.target.value),
            onChangeHeight: (e) => setHeight(e.target.value),
        }

    }

    console.log(viewGraph);  

    // const shapeStyle = {
    //     clip-path: actionTypes.shape.Triangle,
    // }

    return (
        <div className="view-graph">
            <LeftPaget />
            <MiddlePage 
            DestailGraph={viewGraph}
            />
            <RightPage
            handleChangeName={handleUserClicked.handleUserChange.onChangeName}
            valueName={name}
            handleChangeX={handleUserClicked.handleUserChange.onChangeX}
            valueX = {X}
            handleChangeY={handleUserClicked.handleUserChange.onChangeY}
            valueY={Y}
            handleChangeWidth={handleUserClicked.handleUserChange.onChangeWidth}
            valueWidth={width}
            handleChangeHeight={handleUserClicked.handleUserChange.onChangeHeight}
            valueHeight={height}
            handleUserClick = {handleUserClicked.handleUserDispatch.onAddShape}
            />

        </div>
    )
}



export default Graph
