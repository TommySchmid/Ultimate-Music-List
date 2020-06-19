import * as actionTypes from '../actions/actions';

const initialState = {
    musicList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FORM_SUBMIT:
            return {
                ...state,
                musicList: Object.values(action.data)
            }
        case actionTypes.FETCH_MUSIC_LIST:
            return {
                ...state,
                musicList: Object.values(action.data)
            }
        default:
            return state;
    }
}

export default reducer;