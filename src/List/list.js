import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

import Auxiliary from '../hoc/Auxiliary/Auxiliary';
import Form from '../form/form';
import { fetch_music_list } from '../store/actions/actions';


import './list.css';

class List extends Component {

    componentDidMount() {
        this.props.fetchMusicList();
    }


    render() {
        return (
            <Auxiliary>
                <div className="centerItems">
                    <div>The Ultimate Music List</div>
                    <br />
                    <br />
                    <Form 
                    loaded={this.props.fetchMusicList}
                    />
                    {this.props.fetchedList.map(musicListItem => (
                        <Card className="listItemContainer" key={musicListItem.artist}>
                            <div>
                                {musicListItem.artist}
                            </div>
                        </Card>
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