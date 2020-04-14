import React, { Component } from 'react';
import axios from '../hoc/axios';

class Form extends Component {
    state = {
        artist: ''
    }

    formSubmitHandler = (event) => {
        event.preventDefault();
        const post = this.state;
        axios.post('/artists/.json', post)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    updateValueHandler = (event) => {
        this.setState({
            artist: event.target.value
        });
        console.log(this.state);
    }

    render() {

        return (
            <form onSubmit={this.formSubmitHandler}>
                <input
                    type="text"
                    onChange={this.updateValueHandler}
                    value={this.state.artist}
                />
                <button>Add</button>
            </form>
        );
    }
}

export default Form;