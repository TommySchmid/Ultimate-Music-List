import React, { Component } from 'react';
import axios from '../hoc/axios';

class Form extends Component {
    state = {
        artist: ''
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
                    artist: ''
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    updateValueHandler = (event) => {
        this.setState({
            artist: event.target.value
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
                <button>Submit</button>
            </form>
        );
    }
}

export default Form;