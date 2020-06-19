import React, { Component } from 'react';
// import axios from '../hoc/axios';
import { connect } from 'react-redux';

import Auxiliary from '../hoc/Auxiliary/Auxiliary';
import Form from '../form/form';
import { fetch_music_list } from '../store/actions/actions';


import './list.css';

class List extends Component {

    componentDidMount() {
        this.props.fetchMusicList();
    }

    // For form submit through redux - next commit
    // loadMusicList = () => {
    //     axios.get('/.json')
    //         .then(response => {
    //             this.setState({ musicList: Object.values(response.data) });
    //             console.log(this.state.musicList, 'response.data');
    //         })
    //         .catch(error => {
    //             console.log('error caught', error);
    //         });
    // }

    render() {

        return (
            <Auxiliary>
                <div className="Headline">
                    <div>Ultimate Music List</div>
                    <Form 
                    loaded={this.props.fetchMusicList}
                    />
                    {this.props.fetchedList.map(musicListItem => (
                        <div key={musicListItem.artist}>{musicListItem.artist}</div>
                    ))}
                </div>
            </Auxiliary>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetchedList: state.musicList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchMusicList: () => dispatch(fetch_music_list())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);