import * as actionTypes from "./action"



const initialState = [
  {id: 0, Title:'abc', X: 0, Y: 0, Width: 70, Height: 70},
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
        Width: action.width,
        Height: action.height,
      }
      state.push(newState);
      return state

    case actionTypes.active.LEFTX:
      const incX = [...state];
      incX.map((inc) => {
        if(inc.id === state.id){
          return {
            ...inc,
            X : inc.X + 1,
          }
        } 
      })
      break;

    case actionTypes.active.RIGHTX:
      const DecX = [...state];
      DecX.map((inc) => {
        if(inc.id === state.id){
          return {
            ...inc,
            X : inc.X -1,
          }
        } 
      })
      break;

    case actionTypes.active.DOWNY:
      const DownY = [...state];
      DownY.map((inc) => {
        if(inc.id === state.id){
          return {
            ...inc,
            Y : inc.Y -1,
          }
        } 
      })
      break;

    case actionTypes.active.UPY:
      const UpY = [...state];
      UpY.map((inc) => {
        if(inc.id === state.id){
          return {
            ...inc,
            Y : inc.Y + 1,
          }
        } 
      })
      break;

    case actionTypes.active.INCREMENTWIDTH:
      return state

    case actionTypes.active.DECREMENTWIDTH:
      return state

    case actionTypes.active.INCREMENTHEIGHT:
      return state
    
    case actionTypes.active.DECREMENTHEIGHT:
      return state

    default:
        return state
    }
}

export default reducer