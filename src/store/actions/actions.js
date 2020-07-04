import axios from '../../hoc/axios';

export const FORM_SUBMIT = 'FORM_SUBMIT';
export const FETCH_MUSIC_LIST = 'FETCH_MUSIC_LIST';

export const form_submit = (data) => {
    return function (dispatch) {
        const post = data;
        axios.post('/.json', post)
            .then(setTimeout(() => {
                axios.get('/.json')
                .then((response) => dispatch({
                    type: FETCH_MUSIC_LIST,
                    data: response.data
                }))
                .catch(error => {
                    console.log('error caught', error);
                })
            }, 500))
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