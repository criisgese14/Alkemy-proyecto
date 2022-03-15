import { DELETE_MOVEMENT, GET_ALL_MOVEMENTS, GET_MOVEMENT, POST_MOVEMENT, PUT_MOVEMENT } from "../Actions"


const initialState = {
    allMovements : [],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_MOVEMENTS:
            return {
                ...state,
                allMovements: action.payload,
            }
        case POST_MOVEMENT:
            return {
                ...state
            }
        case DELETE_MOVEMENT:
            return {
                ...state,
                allMovements: state.allMovements.filter(c => c.id !== action.payload)
            }
        case PUT_MOVEMENT:
            return {
                ...state,
            }
        default:
            return {
                ...state,
            }
    }
}

export default rootReducer;