const initialState = {
    musicList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FORM_SUBMIT':
            return {
                ...state
            }
        default:
            return state;
    }
}

export default reducer;