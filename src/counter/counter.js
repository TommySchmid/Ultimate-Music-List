import React, { Component } from 'react';

import { Card } from 'react-bootstrap';

class Counter extends Component {
    render() {
        return (
            <div className = "centerItems">
                <Card className = "listItemContainer">List Items: {this.props.listLength}</Card>
            </div>
        );
    }
}

export default Counter;