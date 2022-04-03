import React from 'react';

import './TextField.scss'

export default class TextField extends React.Component {
    render() {
        return (
            <div className="text">
                <h1>{this.props.headline}</h1>
                <p>{this.props.text}</p>
            </div>
        )
    }
}