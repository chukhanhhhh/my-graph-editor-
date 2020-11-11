import * as actionTypes from "./action"

const initialState = {
    graph: {
        id: Math.floor(Math.random()*100),
        Shape : '',
        Title: '',
        X : 0,
        Y : 0,
        Width: 0,
        Height: 0,
    }
};

export default (state = initialState, action) => {
    switch (action.type) {

    case actionTypes.active.ADD:
        return { 
            ...state,
            Title : action.name,
            X : action.X,
            Y: action.Y,
            Width: action.width,
            Height: action.height,
        }

    default:
        return state
    }
}