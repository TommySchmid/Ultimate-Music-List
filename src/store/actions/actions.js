import axios from '../../hoc/axios';

export const FORM_SUBMIT = 'FORM_SUBMIT';
export const DELETE_LIST_ITEM = 'DELETE_LIST_ITEM';
export const FETCH_MUSIC_LIST = 'FETCH_MUSIC_LIST';
export const UPDATE_LIST = 'UPDATE_LIST';

export const form_submit = (data) => {
    console.log(data);
    return function (dispatch) {
        axios.post('/.json', data)
            .then((response) => {
                axios.get('/.json')
                    .then((response) => {
                        dispatch(fetch_music_list());
                    })
                    .catch(error => {
                        console.log('error caught', error);
                    })
            })
    }
};

export const delete_list_item = (key) => {
    return function (dispatch) {
        var i = 0;
        var newList = [];
        axios.get('/.json')
            .then((response) => {
                for (i; i < Object.values(response.data).length; i++) {
                    if (key !== Object.values(response.data)[i].artist) {
                        newList.push(Object.values(response.data)[i]);
                    }
                }
                axios.delete('/.json')
                    .then((response) => {
                        i = 0;
                        for (i; i < newList.length; i++) {
                            axios.post('/.json', {artist: newList[i].artist, btnIsDisabled: false})
                                .then((response) => {
                                    dispatch(fetch_music_list());
                                })
                        }
                    })
            })
            .catch(error => {
                console.log('error caught', error);
            })
    }
}

export const fetch_music_list = () => {
    return function (dispatch) {
        axios.get('/.json')
            .then((response) => dispatch({
                type: FETCH_MUSIC_LIST,
                data: response.data
            }))
            .catch(error => {
                console.log('error caught', error);
            })
    }
}