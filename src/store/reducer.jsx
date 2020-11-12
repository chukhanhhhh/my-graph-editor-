import * as actionTypes from "./action"



const initialState = [
  {id: Number, Title:String, X: Number, Y: Number, Width:Number, Height:Number},
];

// const [state, setstate] = useState(initialState)

const reducer = (state = initialState , action) => {
    switch (action.type) {

    case actionTypes.active.ADD:

      const newState = {
        id: Math.floor(Math.random()*100),
        Title : action.name,
        X : action.x,
        Y: action.y,
        Width: action.with,
        Height: action.height,
      }
      setTimeout(()=> {state.push(newState);},1000)
      return state
      // state[0]
    default:
        return state
    }
}

export default reducer