import React, { Component } from 'react';
import axios from '../hoc/axios';

import Auxiliary from '../hoc/Auxiliary/Auxiliary';
import ListItem from './listItem/listItem';
import Form from '../form/form';

import './list.css';

class List extends Component {
    state = {
        musicList: []
    }

    componentDidMount() {
        axios.get('/artists/.json')
            .then(response => {
                this.setState({ musicList: response.data });
                console.log(this.state.musicList);
            })
            .catch(error => {
                console.log('error caught', error);
            });
    }

    render() {

        // let musicListItems = () => (
        //     this.state.musicList.map(listItem => (
        //         <div>
        //         <ListItem 
        //             inputs={listItem.artist}
        //         />
        //         </div>
        //     ))
        // );

        return (
            <Auxiliary>
                <div className="Headline">
                    <div>Ultimate Music List</div>
                    <Form />
                {/* {musicListItems()} */}
                </div>
            </Auxiliary>
        );
    }
}

export default List;