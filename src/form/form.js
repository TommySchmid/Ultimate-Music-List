import React, { Component } from 'react';
import { connect } from 'react-redux';

import { form_submit } from '../store/actions/actions';

class Form extends Component {
    state = {
        artist: '',
        btnIsDisabled: true
    }

    // formSubmitHandler = (event) => {
    //     event.preventDefault();
    //     const post = this.state;
    //     axios.post('/.json', post)
    //         .then(response => {
    //             console.log(response);
    //         })
    //         .then(response => {
    //             this.props.loaded();
    //             this.setState({
    //                 artist: '',
    //                 btnIsDisabled: true
    //             });
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }

    updateValueHandler = (event) => {
        this.setState({
            artist: event.target.value,
            btnIsDisabled: false
        });
    }

    render() {

        return (
            <form>
            {/* <form onSubmit={this.formSubmitHandler}> */}
            {/* <form onSubmit={this.props.onFormSubmit}> */}
                <input
                    type="text"
                    onChange={this.updateValueHandler}
                    value={this.state.artist}
                />
                <button disabled={this.state.btnIsDisabled}>Submit</button>
                <div onClick={this.props.onFormSubmit}>Click Here</div>
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
        onFormSubmit: () => dispatch(form_submit({artist: 'Tommy', btnIsDisabled: false}))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);