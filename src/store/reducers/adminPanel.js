import * as actionTypes from '../actions/actionTypes';


const initialState = {
    inputs: {
        select: 'advanced',
        name: '',
        github: '',
        liveDemo: '',
        description: '',
        toolsUsed: [],
        password: null,
    },

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_INPUT_STATE:
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value
                }
            }
        case actionTypes.SEND_DATA_SUCCESS:
            return {
                ...state,
                inputs: {
                    select: 'advanced',
                    name: '',
                    github: '',
                    liveDemo: '',
                    description: '',
                    toolsUsed: [],
                    password: null,
                }
            }
        default: return state
    }
}

export default reducer;