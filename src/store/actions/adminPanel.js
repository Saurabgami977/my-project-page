import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const setInputState = (name, value) => {
    return {
        type: actionTypes.SET_INPUT_STATE,
        name: name,
        value: value
    }
}

export const sendDataSuccess = () => {
    return {
        type: actionTypes.SEND_DATA_SUCCESS,
    }
}

export const saveData = (data) => {
    return data.password === 'mydelllaptop977' ?
        dispatch => {
            axios.post(`/projects/${data.select}.json`, data)
                .then(res => {
                    dispatch(sendDataSuccess())
                })
        } : {
            type: actionTypes.SEND_DATA_SUCCESS
        };
}