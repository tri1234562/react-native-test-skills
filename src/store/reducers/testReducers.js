import { INCREASE_DATA_SUCCESS, DECREASE_DATA_SUCCESS, RESET_DATA_SUCCESS } from '../actionsType'

const initialState = {
  name: "Tri Test",
  content: "Hello world",
  count: 1,
}

const TestReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREASE_DATA_SUCCESS: {
      const { count } = state
      console.log("action INCREASE_DATA_SUCCESS runnnnnn ==> ", action)
      return {
        ...state,
        count: count + 1,
      }
    }
    case DECREASE_DATA_SUCCESS: {
      const { count } = state
      console.log("action INCREASE_DATA_SUCCESS runnnnnn ==> ", action)
      return {
        ...state,
        count: count - 1,
      }
    }
    case RESET_DATA_SUCCESS: {
      const { count } = action.payload
      console.log('RESET_DATA_SUCCESS ==>', count)
      return {
        ...state,
        count,
      }
    }
    default: return state
  }
}

export default TestReducer