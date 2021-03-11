// Redux Api Reducer
const initState = null
export default function apiReducer(state = initState, action) {
    switch (action.type) {
        case "GET_DATA":
            return state
        case "SET_DATA":
            state = action.payload
            return state
        default:
            return state
    }
}