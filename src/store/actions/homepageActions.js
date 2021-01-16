import * as actionTypes from './actionTypes';
import axios from '../../axios'


export const setData = (data) => {
    return {
        type: actionTypes.FETCH_PROJECTS_DATA,
        data: data
    }
}

export const fetchData = () => {
    return dispatch => {
        axios.get(`/projects.json`)
            .then(res => {
                dispatch(setData(res.data))
            })
    };
}