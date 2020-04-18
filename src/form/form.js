import React, { Component } from 'react';
import axios from '../hoc/axios';

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

export default Form;