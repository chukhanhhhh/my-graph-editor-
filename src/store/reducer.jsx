import * as actionTypes from "./action"



const initialState = [
  {id: 0, Title:'abc', X: 50, Y: 10, Width: 70, Height: 70},
  {id: 1, Title:'abcedf', X: 600, Y: 20, Width: 100, Height: 100},
];

// const [state, setstate] = useState(initialState)

const reducer = (state = initialState , action) => {
  // console.log([...state])
    switch (action.type) {

    case actionTypes.active.ADD:

      var newState = {
        id: Math.floor(Math.random()*100),
        Title : action.value.title,
        X : action.value.x,
        Y: action.value.y,
        Width: action.value.width,
        Height: action.value.height,
      }
      state.concat(newState)
      console.log(state)
      // setData(state)
      return  state
      // return state.push(newState);
    // break;  

    case actionTypes.active.DELETE:
      // const delData = [...state]
      // const index = delData.filter((data) =>data.id === action.key );
      // if(index <= -1) return;
      // state.slice(index, 1);
      return state
    // break;  

    case actionTypes.active.LEFT:
      const incX = [...state];
      incX.map((value) => {
        if(value.id === action.key){
          return {
            ...value,
            X : value.X - action.temp,
          }
        }
        // console.log(result)
        return state
      })
      break;

    case actionTypes.active.RIGHT:
      const DecX = [...state];
      DecX.map((inc) => {
        if(inc.id === state.id){
          return {
            ...inc,
            X : inc.X + action.temp,
          }
        }
        console.log(state)
        return state  
      })
      break;

    case actionTypes.active.DOWN:
      const DownY = [...state];
      DownY.map((inc) => {
        if(inc.id === state.id){
          return {
            ...inc,
            Y : inc.Y -1,
          }
        } 
        console.log(state)
        return state 
      })
      break;

    case actionTypes.active.UP:
      const UpY = [...state];
      UpY.map((inc) => {
        if(inc.id === state.id){
          return {
            ...inc,
            Y : inc.Y + 1,
          }
        } 
        console.log(state)
        return state 
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