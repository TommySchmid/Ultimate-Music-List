import axios from '../../hoc/axios';

export const FORM_SUBMIT = 'FORM_SUBMIT';
export const FETCH_MUSIC_LIST = 'FETCH_MUSIC_LIST';

export const form_submit = (data) => {
    return function (dispatch) {
        const post = data;
        console.log('Post', post, dispatch);
        axios.post('/.json', post)
            .then((response) => {
                console.log('Post Complete', response);
            })
            .then(setTimeout(() => {
                axios.get('/.json')
                .then((response) => dispatch({
                    type: FETCH_MUSIC_LIST,
                    data: response.data
                }))
                .then((response) => {
                    console.log('Fetch Complete', response)
                })
                .catch(error => {
                    console.log('error caught', error);
                })
            }, 250))
    }
}

export const fetch_music_list = () => {
    return function (dispatch) {
        axios.get('/.json')
            .then((response) => dispatch({
                type: FETCH_MUSIC_LIST,
                data: response.data
            }))
            .then((response) =>{
                console.log('Fetch Complete', response)
            })
            .catch(error => {
                console.log('error caught', error);
            })
    }
}