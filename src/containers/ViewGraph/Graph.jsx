import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actionTypes from "../../store/action"
import LeftPaget from '../../components/LeftPage/LeftPage'
import MiddlePage from '../../components/MiddlePage/MiddlePage'
import RightPage from '../../components/RightPage/RightPage'
import "./Graph.scss"

const Graph = () => {
    const viewGraph = useSelector(state => state.view);
    // const resultGraph = useSelector(state => state.result)
    const dispatch = useDispatch();
    // const copyStore = Object.assign({}, viewGraph);
    // const [data, setData] = useState(viewGraph);
    const [temp] = useState(10);
    const [name, setName] = useState("abcd");
    const [x, setX] = useState(20);
    const [y, setY] = useState(5);
    const [width, setWidth] = useState(50);
    const [height, setHeight] = useState(50);
    // const [dbValue, saveToDb] = useState(''); 
    
    const handleUserClicked = {

        handleUserDispatch : {
            onAddShape : (e) => {
                e.preventDefault();
                dispatch({
                    type: actionTypes.active.ADD, 
                    name: name, 
                    x: parseInt(x), 
                    y: parseInt(y), 
                    width: parseInt(width), 
                    height: parseInt(height),
                // setData: () => setData(viewGraph)
            })},
            
            onHandleDelete : () => dispatch({type: actionTypes.active.DELETE, key: 0}),            
            onHandleLeft: () => dispatch({type: actionTypes.active.LEFT, temp: temp , key: 0}),
            onHandleRight: () => dispatch({type: actionTypes.active.RIGHT, temp: temp}),
            onHandleUp: () => dispatch({type: actionTypes.active.UP}),
            onHanleDown: () => dispatch({type: actionTypes.active.DOWN}),
            onHandleIncrementWidth: () => dispatch({type: actionTypes.active.INCREMENTWIDTH}),
            onHandleDecrementWidth: () => dispatch({type: actionTypes.active.DECREMENTWIDTH}),
            onHandleIncrementHeight: () => dispatch({type: actionTypes.active.INCREMENTHEIGHT}),
            onHandleDecrementHeight: () => dispatch({type: actionTypes.active.DECREMENTHEIGHT}),

        },


        handleUserChange: {
            onChangeName: (e) => {
                // e.preventDefault();
                setName(e.target.value)
            },
            onChangeX: (e) => {
                setX(e.target.value)
               
            },

            onChangeY: (e) => {
                setY(e.target.value)
               

            },
            onChangeWidth: (e) => {
                setWidth(e.target.value)
               

            },
            onChangeHeight: (e) => {
                setHeight(e.target.value)
               

            },
            
        },

        handleUserKeyDown : {
            // onUserKeyPress : (e) => /[^0-9]/.test(e.key) 
                // e.preventDefault();
            
        }

    }

    return (
        <div className="view-graph">
            <LeftPaget 
            countGraph={viewGraph}
            onDelete = {handleUserClicked.handleUserDispatch.onHandleDelete}
            />
            <MiddlePage 
            destailGraph={viewGraph}
            onUp={handleUserClicked.handleUserDispatch.onHandleUp}
            onDown={handleUserClicked.handleUserDispatch.onHanleDown}
            onLeft={handleUserClicked.handleUserDispatch.onHandleLeft}
            onRight={handleUserClicked.handleUserDispatch.onHandleRight}
            onIncrementWidth={handleUserClicked.handleUserDispatch.onHandleIncrementWidth}
            onDecrementWidth={handleUserClicked.handleUserDispatch.onHandleDecrementWidth}
            onIncrementHeight={handleUserClicked.handleUserDispatch.onHandleIncrementHeight}
            onDecrementHeight={handleUserClicked.handleUserDispatch.onHandleDecrementHeight}
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
            onKeyPress = {handleUserClicked.handleUserKeyDown.onUserKeyPress}
            />

        </div>
    )
}



export default Graph
