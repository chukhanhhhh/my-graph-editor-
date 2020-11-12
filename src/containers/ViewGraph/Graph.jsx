import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actionTypes from "../../store/action"
import LeftPaget from '../../components/LeftPage/LeftPage'
import MiddlePage from '../../components/MiddlePage/MiddlePage'
import RightPage from '../../components/RightPage/RightPage'
import "./Graph.scss"

const Graph = () => {
    const viewGraph = useSelector(state => state.view);
    // const copyStore = Object.assign({}, viewGraph);
    const dispatch = useDispatch();
    const [id] = useState(0);
    const [name, setName] = useState("abc");
    const [x, setX] = useState(250);
    const [y, setY] = useState(5);
    const [width, setWidth] = useState(50);
    const [height, setHeight] = useState(50);
    
    const handleUserClicked = {

        handleUserDispatch : {
            onAddShape : () => dispatch({
                type: actionTypes.active.ADD, 
                name: name, 
                X: x, 
                Y: y, 
                width: width, 
                height: height,
            }),
        },


        handleUserChange: {
            onChangeName: (e) => setName(e.target.value),
            onChangeX: (e) => setX(e.target.value),
            onChangeY: (e) => setY(e.target.value),
            onChangeWidth: (e) => setWidth(e.target.value),
            onChangeHeight: (e) => setHeight(e.target.value),
        },

        handleUserKeyDown : {
            onUserKeyDown : (e) => `${/[\+\-\.\,]$/}` && e.preventDefault()
        }

    }


    // const shapeStyle = {
    //     clip-path: actionTypes.shape.Triangle,
    // }

    return (
        <div className="view-graph">
            <LeftPaget />
            <MiddlePage 
            id = {id}
            destailGraph={viewGraph}
            nameGraph={name}
            xGraph={x}
            yGraph = {y}
            withGraph = {width}
            heightGraph = {height}
            />
            <RightPage
            handleChangeName={handleUserClicked.handleUserChange.onChangeName}
            valueName={name}
            handleChangeX={handleUserClicked.handleUserChange.onChangeX}
            valueX = {x}
            handleChangeY={handleUserClicked.handleUserChange.onChangeY}
            valueY={y}
            handleChangeWidth={handleUserClicked.handleUserChange.onChangeWidth}
            valueWidth={width}
            handleChangeHeight={handleUserClicked.handleUserChange.onChangeHeight}
            valueHeight={height}
            handleUserClick = {handleUserClicked.handleUserDispatch.onAddShape}
            onKeyDown = {handleUserClicked.handleUserKeyDown.onUserKeyDown}
            />

        </div>
    )
}



export default Graph
