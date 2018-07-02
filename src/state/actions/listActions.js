import _ from 'lodash';
import Papa from 'papaparse';
import { UPLOAD_LIST, REORDER_LIST, CLEAR_LIST } from './types';

export const uploadList = e => dispatch => {
    Papa.parse(e.target.files[0], {
        complete: results => {
        const uploaded = _.drop(results.data)
        dispatch({
            type: UPLOAD_LIST,
            payload: uploaded
        })
        }
    });
}

export const reorderList = reordered => dispatch => {
    dispatch({
        type: REORDER_LIST,
        payload: reordered
    })
}

export const clearList = () => dispatch => {
    dispatch({
        type: CLEAR_LIST,
        payload: []
    })
}
