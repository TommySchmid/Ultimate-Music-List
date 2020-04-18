import React, { Component } from 'react';
import axios from '../hoc/axios';

import Auxiliary from '../hoc/Auxiliary/Auxiliary';
import ListItem from './listItem/listItem';
import Form from '../form/form';

import './list.css';

class List extends Component {
    state = {
        musicList: ''
    }

    componentDidMount() {
        axios.get('/.json')
            .then(response => {
                this.setState({ musicList: Object.values(response.data) });
                console.log(this.state.musicList, 'response.data');
            })
            .catch(error => {
                console.log('error caught', error);
            });
    }

    render() {

        let pulledMusic = Object.values(this.state.musicList);

        let musicListItems = () => (
            pulledMusic.map((listItem) => (
                <ListItem
                    key={listItem.artist}
                    inputs={listItem.artist}
                />
            ))
        );

        return (
            <Auxiliary>
                <div className="Headline">
                    <div>Ultimate Music List</div>
                    <Form />
                    {musicListItems()}
                </div>
            </Auxiliary>
        );
    }
}

export default List;