import * as actionTypes from '../actions/actionTypes';


const initialState = {
    data: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PROJECTS_DATA:
            return {
                ...state,
                data: action.data
            }
        default: return state
    }
}

export default reducer;