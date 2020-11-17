import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actionCreators from "../../store/action"
import LeftPaget from '../../components/LeftPage/LeftPage'
import MiddlePage from '../../components/MiddlePage/MiddlePage'
import RightPage from '../../components/RightPage/RightPage'
import "./Graph.scss"

const Graph = () => {
    const  viewGraph = useSelector(state => state.view);
    const resultGraph = useSelector(state => state.results)
    const dispatch = useDispatch();
    const [temp] = useState(10);
    const [name, setName] = useState("abcd");
    const [x, setX] = useState(20);
    const [y, setY] = useState(5);
    const [width, setWidth] = useState(50);
    const [height, setHeight] = useState(50);
    // const [dbValue, saveToDb] = useState(''); 
    


    const handleUserDispatch = {
            onAddShape : () => dispatch(actionCreators.onAdd(
                    name, 
                    parseInt(x), 
                    parseInt(y), 
                    parseInt(width), 
                    parseInt(height)
                    )
            ),

            onCountShape : () => dispatch(actionCreators.storeResult(viewGraph)),
            
            onHandleDelete : () => dispatch(),            
            onHandleLeft: () => dispatch(),
            onHandleRight: () => dispatch(),
            onHandleUp: () => dispatch(),
            onHanleDown: () => dispatch(),
            onHandleIncrementWidth: () => dispatch(),
            onHandleDecrementWidth: () => dispatch(),
            onHandleIncrementHeight: () => dispatch(),
            onHandleDecrementHeight: () => dispatch(),

        }


    const handleUserChange = {
            onChangeName: (e) => {
                e.preventDefault();
                setName(e.target.value)
            },
            onChangeX: (e) => {
                e.preventDefault();
                setX(e.target.value)
               
            },

            onChangeY: (e) => {
                e.preventDefault();
                setY(e.target.value)
               

            },
            onChangeWidth: (e) => {
                e.preventDefault();
                setWidth(e.target.value)
               

            },
            onChangeHeight: (e) => {
                e.preventDefault();
                setHeight(e.target.value)
               

            },
            
        }

const handleUserKeyDown = {
            // onUserKeyPress : (e) => /[^0-9]/.test(e.key) 
                // e.preventDefault();
            
        }


    console.log(viewGraph);
    console.log(resultGraph.results);

    return (
        <div className="view-graph">
            <LeftPaget 
            countGraph={resultGraph.results}
            onDelete = {handleUserDispatch.onHandleDelete}
            />
            <MiddlePage 
            destailGraph={resultGraph.results}
            onUp={handleUserDispatch.onHandleUp}
            onDown={handleUserDispatch.onHanleDown}
            onLeft={handleUserDispatch.onHandleLeft}
            onRight={handleUserDispatch.onHandleRight}
            onIncrementWidth={handleUserDispatch.onHandleIncrementWidth}
            onDecrementWidth={handleUserDispatch.onHandleDecrementWidth}
            onIncrementHeight={handleUserDispatch.onHandleIncrementHeight}
            onDecrementHeight={handleUserDispatch.onHandleDecrementHeight}
            />
            <RightPage
            handleChangeName={handleUserChange.onChangeName}
            valueName={name}
            handleChangeX={handleUserChange.onChangeX}
            valueX = {x}
            handleChangeY={handleUserChange.onChangeY}
            valueY={y}
            handleChangeWidth={handleUserChange.onChangeWidth}
            valueWidth={width}
            handleChangeHeight={handleUserChange.onChangeHeight}
            valueHeight={height}
            handleUserClick = {handleUserDispatch.onCountShape}
            onKeyPress = {handleUserKeyDown.onUserKeyPress}
            />

        </div>
    )
}



export default Graph
