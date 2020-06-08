import React, { Component } from 'react';
import axios from '../hoc/axios';
import { connect } from 'react-redux';

import { form_submit } from '../store/actions/actions';
// import * as actionTypes from '../store/actions/actions';

class Form extends Component {
    state = {
        artist: '',
        btnIsDisabled: true
    }

    formSubmitHandler = (event) => {
        event.preventDefault();
        const post = this.state;
        axios.post('/.json', post)
            .then(response => {
                console.log(response);
            })
            .then(response => {
                this.props.loaded();
                this.setState({
                    artist: '',
                    btnIsDisabled: true
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    updateValueHandler = (event) => {
        this.setState({
            artist: event.target.value,
            btnIsDisabled: false
        });
    }

    render() {

        return (
            <form onSubmit={this.formSubmitHandler}>
            {/* // For form submit through redux - next commit */}
            {/* // <form onSubmit={this.props.onFormSubmit}> */}
                <input
                    type="text"
                    onChange={this.updateValueHandler}
                    value={this.state.artist}
                />
                <button disabled={this.state.btnIsDisabled}>Submit</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        musicList: state.musicList
    };
};

const mapDispatchToProps = dispatch => {
    return{
        onFormSubmit: () => dispatch(form_submit())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);