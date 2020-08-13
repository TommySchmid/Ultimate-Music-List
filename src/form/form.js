import React, { Component } from 'react';
import { connect } from 'react-redux';

import { form_submit } from '../store/actions/actions';

import { Button } from 'react-bootstrap';

class Form extends Component {
    state = {
        artist: '',
        btnIsDisabled: true
    }

    updateValueHandler = (event) => {
        this.setState({
            artist: event.target.value,
            btnIsDisabled: false
        });
    }

    render() {
        return (
            <form 
            onSubmit={(event) => {
                event.preventDefault();
                this.props.onFormSubmit(this.state);
                this.setState({
                    artist: '',
                    btnIsDisabled: true
                });
        }}>
                <input
                    type="text"
                    onChange={this.updateValueHandler}
                    value={this.state.artist}
                />
                <br />
                <br />
                <Button 
                    disabled={this.state.btnIsDisabled} 
                    onClick={(event) => {
                        event.preventDefault();
                        this.props.onFormSubmit(this.state);
                        this.setState({
                            artist: '',
                            btnIsDisabled: true
                        });
                }}
                >Submit</Button>
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
        onFormSubmit: (data) => dispatch(form_submit(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);