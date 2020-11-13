import * as actionTypes from "./action"

const initialState = {

}

export default (state = initialState, action) => {
    switch (action.type) {

    case actionTypes.active.STORE_RESULT:
        return state

    case actionTypes.active.DELETE_RESULT:
        return state    

    default:
        return state
    }
}
