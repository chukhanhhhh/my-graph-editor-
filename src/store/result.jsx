import * as actionTypes from "./action"

const initialState = {
    results: [
        
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {

    case actionTypes.active.STORE_RESULT:
        // const item = action.result.map(item => item);
        const shape = action.result.forEach((item) => state.results.concat(item))
        state.results.concat(shape);
        return state

    case actionTypes.active.DELETE_RESULT:
        return state    

    default:
        return state
    }
}
