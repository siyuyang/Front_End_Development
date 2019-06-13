export const DELETE_SHOWS = 'DELETE_SHOWS';
export const ADD_SHOWS = 'ADD_SHOWS';
export const FETCH_SHOWS = 'FETCH_SHOWS';

export function deleteFn(shows) {
    return {
        type: DELETE_SHOWS,
        shows
    }
}
export function addFn(shows) {
    return {
        type: ADD_SHOWS,
        shows
    }
}
export function getShows() {
    return dispatch => {
        fetch('http://localhost:4000/getdata')
            .then(response => response.json())
            .then(respJSON => {
                dispatch({
                    type: FETCH_SHOWS,
                    payload: respJSON
                })
            })
    }
}